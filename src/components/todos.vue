<template>
  <div class="conten-todos">
    <section class="todoapp">
      <header class="header">
        <h1>备忘录</h1>
        <!-- 绑定数据,添加到数组trim去空,添加键盘事件写添加数组的函数 -->
        <input
          autofocus="autofocus"
          autocomplete="off"
          v-model.trim="msg"
          @keyup.enter="addMsg"
          placeholder="请添加今天要完成的任务?"
          class="new-todo"
        >
      </header>
      <section class="main">
        <input type="checkbox" class="toggle-all" v-model="isCheckStatus">
        <ul class="todo-list">
          <!-- 未完成 -->
          <!-- 遍历数组循环生成列表 -->
          <!-- 判断显示类名 -->
          <li
            class="todo"
            v-for="(item, index) in activeList"
            :class="{completed:item.iscompleted,editing:item==isStatu}"
          >
            <div class="view">
              <!-- 双向数据绑定表单 -->
              <input type="checkbox" class="toggle" v-model="item.iscompleted">
              <!-- 双击的改变isStatu的值改变类交替显示表单和label标签的显示 -->
              <label @dblclick="isStatu=item">{{item.info}}</label>
              <!-- 删除当前列表 -->
              <button class="destroy" @click="removeMsgList(index)"></button>
            </div>
            <!-- 失去焦点改变isStatu的值 -->
            <!-- 绑定表单和label的值 -->
            <!-- 自定义指令 -->
            <input
              type="text"
              class="edit"
              v-model="item.info"
              v-focus
              @blur="isStatu=null"
              @keyup.enter="isStatu=null"
            >
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count" v-if="onOkNum!=0">
          <strong>{{onOkNum}}</strong>
          <span v-if="onOkNum==1">item left</span>
          <span v-else-if="onOkNum>1">items left</span>
        </span>
        <ul class="filters">
          <li>
            <a :class="{selected:isStr=='All'}" @click="isStr='All'">All</a>
          </li>
          <li>
            <a  :class="{selected:isStr=='Active'}" @click="isStr='Active'">Active</a>
          </li>
          <li>
            <a
              
              :class="{selected:isStr=='Completed'}"
              @click="isStr='Completed'"
            >Completed</a>
          </li>
        </ul>
        <button class="clear-completed" style="display: none;">Clear completed</button>
      </footer>
    </section>
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>
        Written by
        <a href="http://evanyou.me">Evan You</a>
      </p>
      <p>
        Part of
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "todos",
  data() {
    return {
      msg: "",
      msgList: JSON.parse(localStorage.getItem("jian")) || [],
      isStatu: "",
      isStr: "All"
    };
  },
  // 注册局部自定义指令
  directives: {
    focus: {
      // 指令的定义
      update: function(el) {
        el.focus();
      }
    }
  },
  // 事件
  methods: {
    // 键盘按下事件
    addMsg() {
      // 非空判断
      if (this.msg == "") {
        alert("哥们写点东西吧!");
        // 终止代码返回
        return;
      }
      // 添加到数组unshift()
      // this.msgList.push({
      this.msgList.unshift({
        info: this.msg,
        iscompleted: false
      });
      // 添加完毕清空表单
      this.msg = "";
    },
    // 点击删除
    removeMsgList(index) {
      this.msgList.splice(index, 1);
    }
  },
  // 侦听器
  watch: {
    // 如果 `msgList` 发生改变，这个函数就会运行
    msgList: {
      handler(xin, jiu) {
        // 保存数据到缓存中
        localStorage.setItem("jian", JSON.stringify(this.msgList));
      },
      // 深度监听
      deep: true,
      // 一开始就执行一次
      immediate: true
    }
  },
  //   计算属性
  computed: {
    // 全选和反选
    isCheckStatus: {
      // 获取
      get() {
        return (
          this.msgList.filter(v => {
            return v.iscompleted;
          }).length == this.msgList.length
        );
      },
      // 赋值
      set(val) {
        // console.log( '执行了' +val);
        this.msgList.forEach(v => {
          v.iscompleted = val;
        });
      }
    },
    // 计算有几件事未完成的
    onOkNum() {
      let num = 0;
      this.msgList.forEach(v => {
        if (v.iscompleted == false) {
          num++;
        }
      });
      return num;
      console.log(num);
    },
    activeList() {
      // 全部
      if (this.isStr == "All") {
        return this.msgList;
        //  完成的
      } else if (this.isStr == "Active") {
        let arr = [];
        this.msgList.forEach(v => {
          if (v.iscompleted == true) {
            arr.push(v);
          }
        });
        return arr;
      } else {
        if (this.isStr == "Completed") {
          let Aarr = [];
          // 未完成
          this.msgList.forEach(v => {
            if (v.iscompleted == false) {
              Aarr.push(v);
            }
          });
          return Aarr;
        }
      }
    }
  }
};
</script>
<style lang="scss"  scoped>
// 导入样式
@import "../assets/css/index.css";
@import "../assets/css/result-light.css";
.footer {
  height: 55px;
}
.conten-todos {
  margin: 215px auto;
  width: 800px;
  .header {
    h1 {
      text-align: center;
    }
  }
}
</style>
