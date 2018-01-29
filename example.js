<!DOCTYPE html>
<html>
<head>
	<title>广州交通信息化建设投资营运有限公司</title>
		<meta charset="utf-8">
	<meta name="renderer" content="webkit"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport" id="viewport">
	<meta http-equiv="cache-control" content="no-cache">
</head>
<body>

    <script type="text/javascript" src="./bower_components/mockjs/dist/mock.js"></script>
    <script type="text/javascript" src="./jQuery/jquery-2.2.3.min.js"></script>
    <script>
    var arr=['momo','yanzi','ziwei']
        var obj={
            'host':'www.baidu',
            'port':'12345',
            'node':'selector'
        }

        Mock.mock('http://www.bai.com',{
            'firstName|3':'fei',//重复fei这个字符串 3 次，打印出来就是'feifeifei'。
            'lastName|2-5':'jiang',//重复jiang这个字符串 2-5 次。
            'big|+1':0, //属性值自动加 1，初始值为 0
            'age|20-30':25,//生成一个大于等于 20、小于等于 30 的整数，属性值 25 只是用来确定类型
            'weight|100-120.2-5':110.24,//生成一个浮点数,整数部分大于等于 100、小于等于 120，小数部分保留 2 到 5 位。
            'likeMovie|1':Boolean,//随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。
            'friend1|1':arr,//从数组 arr 中随机选取 1 个元素，作为最终值。
            'friend2|+1':arr,//从属性值 arr 中顺序选取 1 个元素，作为最终值
            'friend3|2-3':arr,//通过重复属性值 arr 生成一个新数组，重复次数大于等于 2，小于等于 3。
            'life1|2':obj,//从属性值 obj 中随机选取 2 个属性
            'life1|1-2':obj,//从属性值 obj 中随机选取 1 到 2 个属性。
            'regexp1':/^[a-z][A-Z][0-9]$/,//生成的符合正则表达式的字符串
            
        })

        $.ajax({
            url:'http://www.bai.com',
            dataType:'json',
            success:function(e){
                console.log(e)
            }
        })
    </script>
</body>
</html>
