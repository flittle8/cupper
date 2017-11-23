+++
title = "Setup"
tags = ["plugins", "tools"]
weight = 1
+++

Before we can start editing an EPUB, we need to download a few tools. Follow the links below to get started:

1. [Sigil](https://github.com/Sigil-Ebook/Sigil/releases)
   Sigil is an open source, multi-platform EPUB ebook editor. We'll use Sigil to edit EPUBs.
2. [ePub3-itizer](https://github.com/kevinhendricks/ePub3-itizer/tree/master/plugin)
   ePub3-itizer is a plug-in for Sigil that will convert an EPUB 2 into a EPUB 3.
   If you're using a Mac, you'll also need to download [ActiveTcl](https://www.activestate.com/activetcl/downloads) for this plugin to work.
3. [Pagelist](http://www.mobileread.mobi/forums/showthread.php?t=265237)
   Pagelist is another plug-in for Sigil. This will help us generate pagelists from page numbers. [Download the zip file](/files/PageList_v0.1.2.zip)(1.8 KB)
4. [EPUB-Checker](https://github.com/IDPF/epubcheck/releases)
   EpubCheck is a tool to validate EPUB files. It can detect many types of errors in EPUB. We can use it to check the EPUB for errors as we work.

## Installing plug-ins in Sigil

1. Go to Plugins > Manage Plugins in the menu bar
2. Click "Add Plugin"
3. Locate and select the zip file that you downloaded
4. Click "OK"

{{% note %}}
Once you've downloaded the plug-ins, you can run them in Sigil by going to Plugins > Edit > Pagelist, or Plugins > Output > ePub3-itizer.
{{% /note %}}

Once you've downloaded the above tools, we can get started with Sigil. Turn to {{% pattern "Check the EPUB version" %}}.