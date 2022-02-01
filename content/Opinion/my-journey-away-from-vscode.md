---
title: Not Another VSCode to Neovim Post
date: "2022-01-31"
image: "neovim.png"
author: "Robby"
tags: ["opinion"]
---

[$\rightarrow$ My Dotfiles](https://github.com/robbyki/Dotfiles)

#### I try not to see Neovim and VSCode as mutually exclusive but complementary

I've been working in Linux systems and vim for a long time and deciding to use
Linux both for my personal machines as well as for my work is without a question
the most consequential decision I've made in my career. I am not going to sugar
coat it, if you are another maniac who also likes to understand the deep layers
of a system and is afflicted with not being happy unless you understand exactly
how something works and then being able to fully customize it to your needs,
then I'm very sorry and welcome to the club. There is without a doubt a unique
kinship I have noticed among those of us who like to tinker and take full
control to "rice" every bit of a workflow to achieve faster navigation and I
think a lot of it has to do with the fact that we share a common trait when it
comes to wrangling one's own environment not only because it minimizes context
switching for your brain and allows you to combine thinking and doing as close
to one another as possible but I would argue because it expresses who you are
unlike anything else can. It's pretty incredible if you did a search on github
for all of the different styles of configurations out there when it comes to vim
settings and customization and I now have my own story of how and why I decided
to build out my environment especially since the 0.5 release with built-in LSP
features which has been absolutely a major game changer not just for me but for
an entire community of text editors who like to be in control.

If you've been programming long enough you probably have seen your share of tools
and language wars and after a while you begin to realize the infinity of it all
and the silliness with even holding a strong position of any kind and I am just
as guilty as the next person when it comes to indulging in proselytizing
something. Lately however something interesting happened to me when it comes to
understanding my own behavior and life-long fascination with the idea of "which
tool is the best for the job at hand." 

I remember a particular meeting I had with a few colleagues where I was telling
them that they really need to consider ditching Jetbrains IntelliJ for VSCode
because the speed and extensions ecosystem wasn't even comparable and they would
really appreciate how snappy it feels. After seeing me use VSCode a few times
they decided to give it a spin and I tried to ease the transition for them by
sharing my settings.json file which was finally a really nice and intuitive
way to customize and properly version control settings. After spending a lot of
time tweaking VSCode, I really liked how it felt and it was obvious that I was
not alone with that feeling by the look of SO's developer surveys showing
VSCode eating Jetbrain's for lunch. What was happening? Well, firstly I think
that developers in general appreciated the performance but also appreciated the
control they were being given. I certainly liked that I felt like I can have
more control over my IDE and everything just felt so much more responsive over
and over again regardless of however many extensions I had. Here comes the weird
part for me though...a few months later I was back in vim and going crazy
configuring my environment there when there was absolutely nothing wrong with
VSCode whatsoever. That's when I had a personal revelation about the fact that
it wasn't about speed or control in the end at all. Yes, the Microsoft team was
doing a terrific job with giving the user a better experience when it comes to
configurations and personalization but at the end of the day, going down to the
level of vimscripts or lua scripts and more importantly being at the lowest
system level when it comes to being at a CLI was something that VSCode was
simply never going to be able compete with. Furthermore, the act and the
exercise of building your own environment from scratch I would highly argue is
probably similar to the person who would never accept buying a factory-built BMW
in place of a custom-built one.

I always just assumed that I liked defaulting back to using vim because the
other tools just didn't provide the same features I needed with speed and
integration with other plugins but it wasn't that at all and it perfectly
exemplified why I have always needed to be at a deeper lever of systems and
environment control. You can throw thousands of the most brilliant developers at
building a tool, the inherent problem is that the maniac population of neovim
users want to be the ones who put it together and have to feel the rush of the
creation process in the end. It's that simple. Like many others, I absolutely do
not believe that building and maintaining your own environment is suited for
everyone and a good way to think about it is to not see it as a binary choice of
better or worst at all actually. It has nothing to do with which one is better
of faster. It has everything to do with what gives you the most gratification in
the end. Do you need to be in the drivers seat and before you think that sounds
like a really nice seat to be in -- don't. Being in the drivers seat means you
are going to be spending a very significant amount of your time trying to learn
how something needs to be configured and incorporated and customized and you
will be spending many hours on what I like to call the "meta" work as opposed to
the actual work. If you get a high from being in full control despite the costs
involved and you can comfortably go to bed at night and feel happy knowing that
you built your own environment and it lives and breathes precisely as you do and
it's a symbiotic system that understands exactly how you think and will be in
complete harmony with how you think and navigate a system then go for it.

In an upcoming post I'm going to showcase my specific setup with neovim that
demonstrates all of the tweaks allowing me to minimize that thinking versus
doing barrier. 
