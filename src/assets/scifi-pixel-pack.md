---
title: Pixel sci-fi Pack
date: 2020-04-28T17:57:11.962Z
---
## Free Pixel sci-fi Pack

The asset pack contains the following items listed below.

```javascript
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    // check if the node is markdown
    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        
        // add the slug to the node field to get access via graphql
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
  }

```

### Contents

1. 16x16 Tiles
2. Props
3. Basic character
4. Enemies