---
title: mermaid-1.snippet
createTime: 2025/08/14 23:13:18
permalink: /article/1ngypz84/
---
````md
```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```
````
