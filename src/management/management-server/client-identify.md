# 客户端识别

您可以为每个 ExamAware 实例自定义一个 id，来标识每个实例。您可以将自定义 id 设置为班级名、教室编号等易于识别的名称。只有服务器段的 id 与客户端重复，客户端才能获得信息。

<a id="url-template"></a>

## url 模板

在调用集控清单中的 url 时，ExamAware 可以根据客户端的信息，将对应信息填入 url 模板中，实现为每个 ExamAware 实例分配特定的对象。

在发起请求时，url 中的模板会直接被替换为对应信息，例如：

``` plaintext
http://localhost:3000/get_config.php?id={id} -> http://localhost:3000/get_config.php?id=111111
```

本文档尚未完工……
