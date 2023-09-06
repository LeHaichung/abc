<template>
  <div>
    <div class="card" v-for="item in posts" :key="item.id" style="width: 18rem">
      <img v-bind:src="item.linkAnh" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ item.nguoiTao }}</h5>
        <p class="card-text">
          {{ item.noiDung }}
        </p>
        <router-link :to="`/post/${item.id}`" class="btn btn-primary">
          Go somewhere {{ item.id }}
        </router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postsComponent",
  data: function () {
    return {
      posts: [
        {
          id: 1,
          linkAnh:
            "https://i.pinimg.com/280x280_RS/82/50/d0/8250d04e9d24487b578f7a6f50402807.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 2,
          linkAnh:
            "https://ttol.vietnamnetjsc.vn//2018/03/07/21/04/nu-sinh-17-tuoi-duoc-khen-dep-thuan-khiet-nhu-thien-su_11.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 3,
          linkAnh:
            "https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
        {
          id: 4,
          linkAnh:
            "https://i.pinimg.com/736x/29/ab/5a/29ab5acafc429ac807f72aece29a5695.jpg",
          noiDung:
            "Some example text some example text. John Doe is an architect and engineer",
          nguoiTao: "Quoc",
        },
      ],
    };
  },
  methods: {
    goDetail() {},
  },
};
</script>
<style scoped>
.color {
  color: white;
}
</style>
