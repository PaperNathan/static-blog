# Write Articles
_(./articles_unpacked)_

Store text files of articles you intend to write.  These text files should have information separated with returns:
1. Title
2. Author
3. Article Content

If you use more returns, it will drop the additional information.

# Build
_(./scripts/filePackage.js)_

Navigate to the scripts folder in your terminal and run ```node filePackage.js```
This will package your articles into a JSON object located at _(./src/articles/articles.json)_
