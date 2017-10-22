// 接口测试
export default{
	/*首页*/
	index : '/api/home/index',
	/* 餐饮列表 */
	cateDetail : '/api/cms/article/cateDetail',
	/*活动详情*/
	activityDetail : '/api/cms/article/activityDetail',
	/*购物详情*/
	shoppingDetail : '/api/cms/article/shoppingDetail',
	/*酒店详情*/
	hotelDetail : '/api/cms/article/hotelDetail',
	/*资讯详情*/
	informationDetail : '/api/cms/article/informationDetail',
	/*景点详情*/
    scenicDetail : '/api/cms/article/scenicDetail',
    /*评论列表接口*/
	commentList : '/api/cms/comment/list',
	/*发表评论接口*/
	addComment : '/api/cms/comment/addComment',
	/*点赞接口*/
	upvotes : '/api/cms/comment/upvotes',
	/*文化单位*/
    cultureDetail : '/api/cms/article/cultureDetail',
	/*走进生态城*/
	sureyDetail : '/api/cms/article/sureyDetail',
	/*获得列表数据*/
	getList : "/api/cms/article/list",
	/*注册接口*/
	register : "/api/user/register",
	/*登录接口*/
	login : "/api/user/login",
	/*验证码接口*/
	validateCode : "/servlet/validateCodeServlet",
	/*表单提交接口*/
	officeRecord : "/api/user/officeRecord",
	/*系统通知列表*/
	messageList : '/api/message/list',
	/*系统通知详情*/
	messageDetail : '/api/message/detail',
	/*意见反馈接口*/
	guestbookSave : "/api/guestbook/guestbookSave",
	/*活动报名接口*/
	add :  "/api/signup/add",
	/*获取未读消息数量*/
	unreadmessagelist : "/api/message/getUserUnreadMessageList",
	/*更改消息状态为已读*/
	updateMessage : '/api/message/updateMessageStatus',
	//修改个人信息
	editPersonal : '/api/user/edit'
}

