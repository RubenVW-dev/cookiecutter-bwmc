cookiecutter-bwmc
=================

A cookiecutter_ template for website/webshop.

Description
-----------

Work-in-progress template for a complete django-based website with these intentions:

    - as lightweight as possible
    - uses Bower_ as front-end package manager
    - installs jquery_ and bootstrap_
    - uses Grunt_ as task runner to automate less/js compilation

.. _Grunt: http://gruntjs.com/
.. _PostgreSQL: http://www.postgresql.org/
.. _Bower: http://bower.io/
.. _jquery: http://jquery.com/
.. _bootstrap: http://getbootstrap.com/

It uses a fixed set of versions as requirements, making sure that at least the dependencies that are listed, work well together.

Usage
-----

First, get cookiecutter. Trust me, it's awesome::

    $ pip install cookiecutter

Now run it against this repo, after creating a virtualenv::

    $ cd <your-workspace>
    $ cookiecutter  https://github.com/rubinoske/cookiecutter-bwmc.git

You'll be prompted for some questions, answer them, then it will create a project for you.


Done!
-----

Now, it's time to start writing some code!!!


Not Exactly What You Want?
--------------------------

This is what I want. *It might not be what you want.* Don't worry, you have options:

Fork This
~~~~~~~~~

If you have differences in your preferred setup, I encourage you to fork this to create your own version.
Once you have your fork working, let me know and I'll add it to a '*Similar Cookiecutter Templates*' list here.
It's up to you whether or not to rename your fork.

If you do rename your fork, I encourage you to submit it to the following places:

* cookiecutter_ so it gets listed in the README as a template.

.. _cookiecutter: https://github.com/audreyr/cookiecutter

Or Submit a Pull Request
~~~~~~~~~~~~~~~~~~~~~~~~

I also accept pull requests on this, if they're small, atomic, and if they make my own project development
experience better.