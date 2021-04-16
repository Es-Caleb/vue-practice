<template>
  <div class="todo-index">
    <div class="todo-title">todos</div>
    <div class="todo-content">
			<div class="todo-header">
				<img v-if="seleteStatus" class="todo-select-img" src="../../assets/downArrow.png" @click="seleteAll(1)" />
				<img v-else class="todo-select-img" src="../../assets/downArrow-select.png" @click="seleteAll(2)" />
				<input class="todo-inputBox" v-model="needTodo" placeholder="What needs to be done?" @keyup.enter="addTodo()" />
			</div>
			<div class="todo-lists" v-if="list.length > 0">
				<div v-for="(item, index) in list" :key="index" class="list-box">
					<div class="list-select" @click="seleteItem(item.id)">
						<img v-if="item.status === 1" src="../../assets/select.png" />
					</div>
					<input class="list-input" :class="{'input-select': item.status === 1}" v-model="item.thing" @focus="disImg()" @blur="focusNo($event)" @keyup.enter="focusNo($event)" />
					<div class="list-deleteBox" v-show="focusDisplay">
						<img class="list-delete" src="../../assets/delete.png" @click="deleteTodo(item.id)" />
					</div>
				</div>
			</div>
			<div class="todo-footer">
				<div class="todo-sums">{{ itemNum }} items left</div>
				<div class="todo-label">
					<div class="label-option" :class="{'select': type === 0}" @click="changetype(0)">All</div>
					<div class="label-option" :class="{'select': type === 1}" @click="changetype(1)">Active</div>
					<div class="label-option" :class="{'select': type === 2}" @click="changetype(2)">Completed</div>
				</div>
				<div class="todo-clear">
					<span v-if="clearDisplay" @click="clearLists()">Clear Completed</span>	
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
			type: 0,
			focusDisplay: true,
			allList: [
				{
					id: 1,
					thing: '学习ES6',
					status: 0
				}
			],
			needTodo: '',
		};
  },
	computed: {
		// Clear Completed 是否显示
		clearDisplay() {
			let todos = this.allList.filter(e => e.status === 1);
			if (todos.length > 0) {
				return true;
			}
			return false;
		},
		// 显示的内容
		list() {
			if (this.type === 0) {
				return this.allList;
			} else if (this.type === 1) {
				return this.allList.filter(e => e.status === 0);
			} else {
				return this.allList.filter(e => e.status === 1);
			}
		},
		// 未完成数量
		itemNum() {
			let todos = this.allList.filter(e => e.status === 0);
			return todos.length;
		},
		seleteStatus() {
			let todos = this.allList.filter(e => e.status === 0);
			if (todos.length === 0) {
				return false;
			}
			return true;
		}
	},
	methods: {
		changetype(num) {
			this.type = num;
		},
		// 全选
		seleteAll(i) {
			this.allList.forEach(item => {
				if (i === 1) {
					item.status = 1;
				} else {
					item.status = 0;
				}
			})
		},
		// 选择一个
		seleteItem(id) {
			let index = this.allList.findIndex((item) => { return item.id == id; });
			this.allList[index].status = this.allList[index].status === 1 ? 0 : 1;

		},
		// 取消焦点
		focusNo(event) {
			event.target.blur();
			this.focusDisplay = true;
		},
		// 获得焦点时隐藏删除图片
		disImg() {
			this.focusDisplay = false;
		},
		// 删除
		deleteTodo(id) {
			let index = this.allList.findIndex((item) => { return item.id == id; });
			this.allList.splice(index, 1);
		},
		// 添加
		addTodo() {
			let id = this.allList.length ? this.allList[this.allList.length-1].id + 1 : 1
			let data = {
				id,
				thing: this.needTodo,
				status: 0
			}
			this.allList.push(data);
			this.needTodo = '';
		},
		clearLists() {
			this.allList = this.allList.filter(e => e.status === 0);
		}
	}
};
</script>

<style lang="scss" scoped>
input {
	outline-color: invert;
	outline-style: none;
	outline-width: 0px;
	border: none;
	border-style: none;
	text-shadow: none;
	-webkit-appearance: none;
	-webkit-user-select: text;
	outline-color: transparent;
	box-shadow: none;
}
.todo-index {
	padding: 0 360px;
  .todo-title {
  	text-align: center;
    font-size: 80px;
  }
	.todo-content {
		margin-top: 10px;
		border-radius: 5px;
		box-shadow:-2px 0px 10px #333333;
		.todo-header {
			border-radius: 5px 5px 0 0;
			border: 1px solid #f0f0f0;
			padding: 10px 20px;
			display: flex;
			align-items: center;
			.todo-select-img {
				border-radius: 50%;
				width: 32px;
				height: 32px;
				margin-right: 6px;
			}
			.todo-inputBox {
				width: 100%;
				height: 40px;
				font-size: 35px;
				color: #797878;
				&::-webkit-input-placeholder{
					color:#dbdbdb;
				}
			}
		}
		.todo-lists {
			max-height: 600px;
			overflow: hidden;
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
			.list-box {
				display: flex;
				align-items: center;
				padding-left: 20px;
				border-bottom: 1px solid #f0f0f0;
				&:last-of-type {
					border-bottom: 0;
				}
				&:hover {
					.list-deleteBox {
						margin-right: 20px;
						width: 32px;
						height: 32px;
						visibility: visible;
					}
				}
				.list-select {
					border-radius: 50%;
					width: 32px;
					height: 32px;
					border: 1px solid #f0f0f0;
					margin-right: 5px;
				}
				.list-input {
					width: 100%;
					height: 40px;
					font-size: 35px;
					padding: 14px 20px;
					color: #797878;
					line-height: 1;
					&::-webkit-input-placeholder{
						color:#dbdbdb;
					}
					&:focus{
						box-shadow: 2px 0px 5px #797878 inset;
						// border-radius: 3px;
					}
					&.input-select {
						text-decoration: line-through;
						color:#dbdbdb;
					}
				}
				.list-deleteBox {
					width: 32px;
					height: 32px;
					margin-right: 20px;
					visibility: hidden;
						.list-delete {
							width: 32px;
							height: 32px;
						}
					}
			}
		}
		.todo-footer {
			border-radius: 0 0 5px 5px;
			border: 1px solid #f0f0f0;
			padding: 10px 20px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.todo-sums {
			}
			.todo-label {
				display: flex;
				.label-option {
					margin-right: 20px;
					padding: 5px 6px;
					line-height: 1;
					border: 1px solid #FFF;
					border-radius: 3px;
					cursor: pointer;
					&:last-of-type {
						margin-right: 0;
					}
					&.select {
						border: 1px solid #ccc;
					}
				}
			}
			.todo-clear {
				width: 124px;
				&:hover {
					text-decoration: underline;
					cursor: pointer;
				}
			}
		}
	}
}
</style>