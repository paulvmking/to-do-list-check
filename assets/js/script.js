(function() {
	'use strict';
	var tasker = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
			this.evalTasklist();
		},
		cacheDom: function() {
			this.taskInput = document.getElementById("input-task");
			this.addBtn = document.getElementById("add-task-btn");
			this.tasklist = document.getElementById("tasks");
			this.tasklistChildren = this.tasklist.children;
			this.errorMessage = document.getElementById("error");
        },
		bindEvents: function() {
			this.addBtn.onclick = this.addTask.bind(this);
			this.taskInput.onkeypress = this.enterKey.bind(this);
        },
        evalTasklist: function() {
            var i, chkBox, delBtn;
			for (i = 0; i < this.tasklistChildren.length; i += 1) {
				chkBox = this.tasklistChildren[i].getElementsByTagName("input")[0];
				chkBox.onclick = this.completeTask.bind(this, this.tasklistChildren[i], chkBox);
				delBtn = this.tasklistChildren[i].getElementsByTagName("button")[0];
				delBtn.onclick = this.delTask.bind(this, i);
			}
        },
        
		render: function() {
			var taskLi, taskChkbx, taskVal, taskBtn, taskTrsh;
			taskLi = document.createElement("li");
			taskLi.setAttribute("class", "task");
			taskChkbx = document.createElement("input");
			taskChkbx.setAttribute("type", "checkbox");
			taskVal = document.createTextNode(this.taskInput.value);
			taskBtn = document.createElement("button");
			taskTrsh = document.createElement("i");
			taskTrsh.setAttribute("class", "fa fa-trash");
			taskBtn.appendChild(taskTrsh);

			taskLi.appendChild(taskChkbx);
			taskLi.appendChild(taskVal);
			taskLi.appendChild(taskBtn);

			this.tasklist.appendChild(taskLi);

		},
    }}) 