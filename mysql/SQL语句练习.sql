


-- 数据库操作

	-----------------------------------------------------------------------------------------------------------------------
	-- 1. 库层级的相关操作 -----------------

	-- 链接数据库
  	mysql -uroot -p
  	mysql -uroot -pmysql123
  
 	-- 退出数据库
  	exit/quit

  	--sql语句最后需要分号;结尾--

  	-- 显示数据库版本
  	select version();

  	-- 显示时间
  	select now();

  	-- 查看所有数据库
  	show databases;

  	-- 创建数据库
  	create database python_test1;
  	create database python_test2  charset=utf8;

  	-- 查看创建的数据库
  	show create database python_test2;
 
  	-- 使用数据库
  	use python_test2;

  	-- 删除数据库
  	drop database python_test2;

----------------------------------------------------------------------------------------------------------------------------------------
-- 2. 表层级的相关操作 -----------------

-- 数据库中,表的操作
	-- 查看当前数据库中所有的表
	show tables;

	-- 查看创建的某个表描述
	show create table xxxx;
	show create table xxxx2;

	-- 创建表
	-- create table 数据表名字 (字段 类型 约束[, 字段 类型 约束]);
	-- auto_increment 表示自动增长
	-- not null 表示不能为空
	-- primary key 表示主键
	-- default 默认值
	create table xxxx(id int, name varchar(30));
	create table xxxx2(id int, sex varchar(30), age int);
	create table xxxx3(id int primary key not null auto_increment, title varchar(100));
	-- 创建一个student表(id, name, age, hight, gender, cls_id)
	create table student(
			id int unsigned primary key not null auto_increment,
			name varchar(30) not null,
			age tinyint unsigned default 0,
			height decimal(5,2) ,
			gender enum("男","女","人妖") default "人妖",
			cls_id int unsigned
		);

	-- 插入一条数据
	insert into student values(1,"小明",12,1.45,"人妖",0);
	insert into classes vaules(1,'桔子班');

	-- 查看某个表的所有数据
	select * from student;
	select * from classdes;

	-- 表结构的增删改查
	-- 查看表的数据结构
	desc student;

	-- 表添加字段
	alter table student add brithday datetime;

	-- 修改表字段(不重命名)
	-- modify 
	alter table student modify brithday date;
	-- 修改表字段(重命名)
	alter table student change brithday date default "1990-01-01";

	-- 删除表字段
	alter table student drop date;

	-- 删除表
	drop table student;


----------------------------------------------------------------------------------------------------------------------------------------
-- 3.数据层级的相关操作 -----------------

-- student表
+----+--------+------+--------+--------+--------+
| id | name   | age  | height | gender | cls_id |
+----+--------+------+--------+--------+--------+
|  1 | 小明   |   12 |  15.50 | 男     |      0 |
|  2 | 小丽   |   13 |  11.34 | 女     |      1 |
|  3 | 小米   |   14 |  12.33 | 男     |      4 |
+----+--------+------+--------+--------+--------+

-- classes表
+----+-----------+
| id | title     |
+----+-----------+
|  1 | 草莓班    |
|  2 | 香瓜班    |
|  3 | 蜜糖班    |
+----+-----------+

   -- 增加 
      -- 全列插入
      -- insert [into] 表名 values(...)
      -- 主键字段 可以用 0 null default 来占位
      -- 向classes表中插入 一个班级
      insert into classes values(0,'桔子班');
      insert into classes values(default,'苹果班');
      -- 枚举中的值对应1/2/3....
      insert into student values(1,"小明",12,1.45,"男(或这里可以用数字1代替)",0);

      -- 部分插入
      insert into student (name,age) values("小平",12);

      -- 多行插入
      insert into student (name,age) values('张三',13),('李四', 13);

   -- 修改
   	  -- update
   	  update student set age=12; --将字段age全部改为12
   	  update student set age=19 where name='小白'; --只要name=小白,全部修改
   	  update student set age=20 where id=3; --只要id为3,进行修改
   	  update student set age=22,name='小明' where id=10; --只要id为10,进行修改

   -- 删除
    -- 物理删除
      delete from student; --整个删除表内数据
      delete from student where name='小白菜';

    -- 逻辑删除
    alter table student add is_hidden bit default 0; --添加一个字段,用于标识是否逻辑删除
    update student set is_hidden=1 where id=4; --逻辑删除(标识)id为6的数据



   -- 查询
   	  -- 查询所有列
   	  select * from student;
   	  -- 指定条件查询
   	  select * from student where name='小白菜'; --查询name为小白菜的所有数据
   	  select * from student where id>3; --查询id大于3的所有信息
   	  
   	  -- 查询指定字段
   	  select name,age from student;
 	
 	  -- 使用as为字段指定别名
 	  select name as 姓名, age as 年龄 from student;


















