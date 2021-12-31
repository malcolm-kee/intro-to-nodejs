# Basic Skills

Writing good documentations is as important as writing good code.

At the end of the day, a good code is something that is easy to use and do what it intends to do. Without good documentations, it is hard to find out how to use your code and even harder to find out what the code supposed to do.

## Documentation Tips

Here are some tips:

### 1. Learn Markdown Syntax

Read [Markdown basic syntax article](https://www.markdownguide.org/basic-syntax/) and you are good to go! Markdown is designed to be simple to learn and use.

### 2. Serve Primary Audiences' Goal

You should put some thoughts on determining the primary audiences of your documentations, and then focus on serving their goal.

Common primary audiences:

1. Other developers that want to start contribute to the project (this is most common for developer working for company)
1. Other developers that want to use your project (this is common if you publish a npm package that others can install and use)
1. Senior developers/recruiters evaluating your project for your skills

From there, you can decide what to include in your documentations.

For example, for internal projects and job interview submissions, how to setup and run the project would be crucial and should be included early in your documentations. This decision would not make sense for library project, where most of the audiences care more about how to use the library instead of how to setup the project.

### 3. Use VS Code Markdown Preview

Read [this docs](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) from VS Code to learn how to use this.

## Common Things to Include

Following are some of the common things you can include, however it is not a must-have nor exhaustive. Treat it more like inspiration instead of a checklist that you must check off.

1. Title of project
1. Value of the project - can be business value (like serving a business function) or technical value (solving a common programming task)
1. Screenshot of the project (if the project involves UI)
1. Technologies - technologies chosen for the project and justification. For example, if you decide to use TailwindCSS, you may specify it was chosen as you want to learn about it (an acceptable justification for personal project but not for work project)
1. Setting Up - steps to setup the project to start contributing
1. Common Tasks - how to do common tasks in the project, e.g. the command to build the project and run the automated tests.
1. Related Projects/Tools - links to related project and tools
1. FAQ - common issues/questions about the project
