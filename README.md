tianjianbz.com-2015
=============

天键包装材料机械有限公司中文官网2015年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/tianjianbz.com``

编辑配置文件及保存: 

    server {
        server_name tianjianbz.com;
        return 301 http://www.tianjianbz.com$request_uri;
    }
    server {
        server_name www.tianjianbz.com;
        index index.html;
        root /srv/tianjianbz.com-2015/_site;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/tianjianbz.com /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/tianjianbz.com-2015.git``

2. 进入源码根目录: ``cd tianjianbz.com-2015``

3. 生成网站: ``jekyll build``


开发者
---------

* Zack Wong &lt;hzzzoo@126.com&gt;
