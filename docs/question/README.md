# 常见问题

## sqlserver 连接失败
> sqlserver 不同版本的驱动包不一样，对应的驱动class也不一样
在SQL Server 2000 中加载驱动和URL路径的语句是:
```
String driverName = "com.microsoft.jdbc.sqlserver.SQLServerDriver";
String dbURL = "jdbc:microsoft:sqlserver://localhost:1433; DatabaseName=sample";
```
> 而sql server 2005 中加载驱动和url的语句则为
```
String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
String dbURL = "jdbc:sqlserver://localhost:1433; DatabaseName=sample";
```
> 如果写法错误将会找不到驱动。  


## 是否支持mongoDB、ElasticSearch、Hbase?
> 不支持，这是一个把sql转为API的工具，对于NoSql不支持.

> 不过你可以使用开源框架[budo-jdbc](https://gitee.com/budogroup/budo-jdbc)将`NoSql`转化成`SQL`来使用。例如mongoDB可以建立以下数据源
```java
String driverName = "org.budo.mongo.jdbc.driver.BudoMongoJdbcDriver";
String dbURL = "jdbc:mongo://192.168.4.32:27017/taobao";
```

> 又比如你可以使用`Apache Phoenix`来访问Hbase。例如以下数据源
```java
String driverName = "org.apache.phoenix.jdbc.PhoenixDriver";
String dbURL = "jdbc:phoenix:localhost:2181";
```


## 分页查询的sql怎么写？
> 必须使用`3.0.0`及以上版本才能实现，可以在一个API内写两条sql，以mysql为例：
```sql
select * from orders limit #{start},#{pageSize}

select count(1)/#{pageSize} as totalPageNum from orders
```
>  [查看案例](http://101.34.234.234:8520/#/api/edit?id=lxjfdZxO)


## 是否支持insert，update，delete语句？
> 支持


## 怎样插入多条数据?
> 插入多条数据必须在`3.1.1`及以上版本才能实现
`Content-Type` 一定要选择 `application/json`
sql实例：
```
insert into student(name,age) VALUES
<foreach open="" close="" collection="students" separator="," item="item" index="index">
(#{item.name}, #{item.age})
</foreach>
```
> 请求参数实例：
```
{"students":[{"name":"刘德华","age":55},{"name":"林俊杰","age":30}]}
```


## 是否支持事务？
> `3.0.0`以前默认没有开启事务
`3.0.0` 默认开启了事务，但是对hive这种不支持事务的数据库会有bug.
`3.1.1`开始，事务的开启关闭可以直接在页面上配置，每个API单独配置，对于hive这种不支持事务的数据库必须配置关闭事务

## 是否可以在生产环境使用？
> DBApi前期在企业内部生产环境进行了大量的试错，修复了很多bug，经过了这么多次版本迭代，作者相信DBApi经得住考验

## sql里写小于号`<`报错
> 和mybatis类似，小于号要转义，sql里的小于号写成`&lt;`

## postman调用API失败
> `3.0.0`及以前版本，接口的`Content-Type`必须是`application/x-www-form-urlencoded`，请检查postman调用的方式对不对

> 从`3.1.1`开始，接口的`Content-Type`必须是`application/x-www-form-urlencoded`或者`application/json`，具体是哪一种要看你的API内部是怎么配置的。
并且`application/json`类型的API调用的时候`Content-Type`必须是`application/json`；
`application/x-www-form-urlencoded`类型的API调用的时候`Content-Type`既可以是`application/x-www-form-urlencoded`也可以是`application/json`

## 是否支持调用存储过程
不支持