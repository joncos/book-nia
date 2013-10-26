book-nia repository
===================

I don't like the they way your requires look when you use relative paths.

If you want to omit using relative requires than put this in your command line (assuming you are in the repository directory)

`export NODE_PATH=$NODE_PATH:$(pwd)/lib`