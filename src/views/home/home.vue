<template>
  <div id="home">
    <navbar>
     <div slot="center" class="centercss">购物街</div>   
    </navbar> 
    <swiper>
      <swiper-item v-for="item in banners ">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
    <recommend :recommends="recommends"></recommend>
    <featureview></featureview>
    <tabcontrol :titles="['流行','新款','精选']" class="tabcontrol" @tabClick='tabClick'></tabcontrol>
    <goodslist :goods='goods[currentType ].list'></goodslist>
    <backtop @click.native='topClick' id="topClick1"></backtop>
  </div>   
</template>

<script>
import navbar from '../../components/common/navbar/navbar.vue'
import {getdata,gethomegoods} from '../../network/home'
import {Swiper,SwiperItem} from '../../components/swiper'
import recommend from './recommend.vue'
import featureview from '../home/featureview.vue'
import tabcontrol from '../../components/content/tabcontrol.vue'
import goodslist from '../../components/content/goodslist.vue'
import backtop from '../../components/content/backtop.vue'

export default {
  components:{
    navbar,
    Swiper,
    SwiperItem,
    recommend,
    featureview,
    tabcontrol,
    goodslist,
    backtop
  },
  data() {
    return {
      // banners=[]
      // result:null
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isLoad:true,
      msg:'正在加载中',
      rememberScroll:0
    }
  },
  created() {
      getdata().then(res=>{
      // this.banners=res.data.data.banner.list;
      // console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
      this.gethomegoods('pop');
      this.gethomegoods('new');
      this.gethomegoods('sell');
    })
  },
  mounted() {
      window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
      window.removeEventListener("scroll",( this.onScroll));
  },
  activated() {
  },
  deactivated() {

  },
  methods:{
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
      }
    },
    gethomegoods(type) {
      const page=this.goods[type].page+1;
      gethomegoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      })
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
		}
  }
}
</script>

<style>
  .centercss {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9999999999;
  }
  /* #home {
    margin-top: 44px;
  } */
  .tabcontrol {
    position: sticky;
    top: 44px;
  }
</style>