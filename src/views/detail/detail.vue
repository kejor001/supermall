<template>
    <div id="detail">
        <detail-navbar @titleClick='titleClick'></detail-navbar>
        <div id="id0"></div>
        <detail-swiper :topimages='topImages'></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info='detailInfo'></detail-goods-info>
        <detail-param-info :param-info="paramInfo" id="id1"></detail-param-info>
        <detail-comment-info :comment-info='commentInfo' id="id2"></detail-comment-info>
        <goods-list :goods="recommends" id="id3"></goods-list>
        <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
        <back-top @click.native='topClick' id="topClick1"></back-top>
        <toast :message="message" :show="show"></toast>
    </div>
</template>

<script>
import DetailNavbar from './DetailNavbar/DetailNavbar.vue'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail'
import detailSwiper from './DetailSwiper.vue'
import DetailBaseInfo from './DetailBaseInfo.vue'
import DetailShopInfo from './DetailShopInfo.vue'
import DetailGoodsInfo from './DetailGoodsInfo.vue'
import DetailParamInfo from './DetailParamInfo.vue'
import DetailCommentInfo from './DetailCommentInfo.vue'
import GoodsList from '../../components/content/goodslist.vue'
import DetailBottomBar from './DetailBottomBar.vue'
import  BackTop from '../../components/content/backtop.vue'
import Toast from '../../components/common/toast/toast.vue'

export default {
    name:'detail',
    components:{
        DetailNavbar,
        detailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop,
        Toast
    },
    data() {
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[],
            isLoad:true,
            msg:'正在加载中',
            rememberScroll:0,
            message:'',
            show:false
        }
    },
    created() {
        //保存传来的iid
        this.iid=this.$route.params.iid,
        //根据iid请求数据
        getDetail(this.iid).then(res=>{
            //控制台打印数据
            // console.log(res);
            const data=res.result;
            this.topImages=res.result.itemInfo.topImages;
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //创建店铺信息
            this.shop=new Shop(data.shopInfo);
        //保存商品的详细数据
            this.detailInfo=data.detailInfo;
        //获取参数的信息    
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule);
        //取出评论信息
            if(data.rate.cRate!==0) {
                this.commentInfo=data.rate.list[0];
            }
        }),
        getRecommend().then(res=>{
            //控制台打印数据
            console.log(res);
            this.recommends=res.data.list
        }) 
    },
    mounted () {
         window.addEventListener("scroll", this.onScroll);
    },
    destroyed() {
      window.removeEventListener("scroll",( this.onScroll));
    },
    methods:{
        titleClick(index) {
            // console.log(index);
            if (index==0) {
                document.body.scrollTop=document.getElementById('id0').scrollIntoView();
            } else if (index==1) {
                document.body.scrollTop=document.getElementById('id1').scrollIntoView();
            } else if ( index==2) {
                document.body.scrollTop=document.getElementById('id2').scrollIntoView();
            } else {
                document.body.scrollTop=document.getElementById('id3').scrollIntoView();
            }
        },
        changeTitle() {
            let titleTop=document.body.scrollTop;
            if (titleTop>document.getElementById('id0').scrollIntoView()) {
                
            }
        },
        topClick() {
            let top=document.querySelector('.topClick1');
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        onScroll(){
			//可滚动容器的高度
			let innerHeight = this.$el.clientHeight;
			//屏幕尺寸高度
			let outerHeight = document.documentElement.clientHeight;
			//可滚动容器超出当前窗口显示范围的高度
			let scrollTop = document.documentElement.scrollTop;
			//避免切换时读取到异常高度
			if(scrollTop==0){
				innerHeight=10000
			}
			//scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
			// console.log(innerHeight + " " + outerHeight + " " + scrollTop);
			if(this.isLoad){
				// console.log(1)
				if(innerHeight <= outerHeight + scrollTop){
					//此处添加自定义操作
                    this.gethomegoods(this.currentType)
				}
			}
		},
        addToCart() {
            // console.log('添加到购物车');
            //获取购物车中的信息
            const product={};
            product.image=this.topImages[0];
            product.title=this.goods.title;
            product.desc=this.goods.desc;
            product.price=this.goods.realPrice;
            product.iid=this.iid
            //将商品传到购物车里面  
            // this.$store.commit('addCart',product);//尽可能将判断逻辑加入到actions中：
            this.$store.dispatch('addCart',product).then(res => {
                this.show=true;
                this.message=res;
                setTimeout(()=>{
                    this.show=false;
                    this.message='';
                },1500)
            })
            
        }
    }
}
</script>

<style>
    #detail {
        position: relative;
        z-index: 9999999;
        background-color: white;
    }
</style>