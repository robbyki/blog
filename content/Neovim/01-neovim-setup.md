---
title: Adding OCP Schemas to Yaml LSP
description: How to configure neovim lsp to use JSON Schema resources
date: "2022-02-06"
image: "neovim.png"
author: "Robby"
tags: ["neovim"]
---


<!-- ${toc} -->

This guide will show you how to configure your Yaml LSP with your own Openshift JSON Schemas.

If you're like me, you find yourself writing alot of Yaml files and as much as I
hate to say it, I'm looking more and more like a Yaml "Farmer" these days the
more I work with Kubernetes and Containers to deploy my applications. It's
pretty easy to set up the schemastore in your lsp yaml settings but I was trying
to find a way to also add the latest Openshift resources to my `nivm-cmp` so
that I can at least get some nice property suggestions and validations as I
create my yaml CRDs. You can check out my latest video on how to do this
[here](https://www.youtube.com/watch?v=afV2WQsS0Cw&t=127s).


<iframe width="1036" height="583" src="https://www.youtube.com/embed/afV2WQsS0Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Some things you will need

* openapi2jsonschema from pip
* https://github.com/sabre1041/k8s-manifest-validation
* On Openshift Cluster. (crc or any other cluster that exposes the `openapi/v2` endpoint)
* [Kubeval](https://github.com/instrumenta/kubeval) manifest validation tool (not technically needed for setting up yaml
lsp but a nice extra to configure with the new schemas)

#### Dependencies

Git project containing `build_schema.py` script for downloading and converting
OCP resources to JSON Schema:
```
git clone https://github.com/sabre1041/k8s-manifest-validation.git
```

Python package that does the actual conversion:
```
pip -U install openapi2jsonschema
```

Kubernetes manifest validation tool:
```
https://github.com/instrumenta/kubeval/releases/latest/download/kubeval-linux-amd64.tar.gz
```

#### Retrieve OpenAPI v2 Schemas from Openshift Cluster
(Note: can be nearly >8MB)
```
python k8s-manifest-validation/scripts/build_schema.py -u $(oc whoami --show-server) -t $(oc whoami -t)
```

You can also retrieve the schema resources from OCP using the following if you
wanted to download them manually:

using curl...

```
curl -kL -H "Authorization: Bearer $(oc whoami -t)" $(oc whoami --show-server)/openapi/v2 > openapi.json
```
or oc get...
```
oc get --raw /openapi/v2 > openapi-v2.json
```

Once I get the export from the cluster after connecting to the endpoint I then
created a dedicated git project to store the schemas in and the just created
another directory containing the symlinks to those schemas in order to configure
`kubeval` with.

This will contain all of the symlinks
```
# Symlinks to the schemas for kubeval
mkdir ~/dev/openshift-json-schema/master-standalone
```

This is the actual git project that will contain the actual schemas after converting them to JSON:
```
# actual schemas in git project
mkdir ~/dev/schemas/openshift
```

Once you push all of the schema files to git you can simply add the following
env variables and alias to make `kval` automatically include the `OCPSCHEMA`
flag as part of the command:

```
export OCPSCHEMA=${HOME}/dev/openshift-json-schema
alias kval="kubeval --schema-dir=${OCPSCHEMA}"
```

After setting those aliases you can simple use the following command for
validating Openshift CRDs locally:

```
kval -f my-oc-crd.yaml # validate Openshift CRD
kubeval -f my-k8s-crd.yaml # validate k8s CRD
```

### Setting up Neovim LSP Yaml

Getting the yaml lsp settings configured is pretty easy at this point by simply
pointing to the new `all.json` file from the git schema project as just another
yaml schema definition.

```
schemas = {
    ["http://json.schemastore.org/github-workflow"] = ".github/workflows/*.{yml,yaml}",
    ["http://json.schemastore.org/github-action"] = ".github/action.{yml,yaml}",
    ["http://json.schemastore.org/ansible-stable-2.9"] = "roles/tasks/*.{yml,yaml}",
    ["http://json.schemastore.org/prettierrc"] = ".prettierrc.{yml,yaml}",
    ["http://json.schemastore.org/kustomization"] = "kustomization.{yml,yaml}",
    ["http://json.schemastore.org/ansible-playbook"] = "*play*.{yml,yaml}",
    ["http://json.schemastore.org/chart"] = "Chart.{yml,yaml}",
    ["https://json.schemastore.org/dependabot-v2"] = ".github/dependabot.{yml,yaml}",
    ["https://json.schemastore.org/gitlab-ci"] = "*gitlab-ci*.{yml,yaml}",
    ["https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/schemas/v3.1/schema.json"] = "*api*.{yml,yaml}",
    ["https://raw.githubusercontent.com/compose-spec/compose-spec/master/schema/compose-spec.json"] = "docker-compose.{yml,yaml}",
--- New Schema definition from github as raw file
    ["https://raw.githubusercontent.com/<path-to-file-in-github>/openshift/all.json"] = "/*.yaml",
    kubernetes = { "/*.yaml" },
},
```

