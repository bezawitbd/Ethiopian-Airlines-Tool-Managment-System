tools = document.getElementById("tools");
tool = document.getElementById("tool");
btn = document.getElementById("btn");

displayTools();

btn.addEventListener("click", () => {
  if (localStorage.getItem("tool-count") == null) {
    let count = 0;
    localStorage.setItem("tool-count", count.toString());
  }
  if (tool.value.length > 0) {
    let tool_count = Number(localStorage.getItem("tool-count"));
    tool_count += 1;
    localStorage.setItem("tool-count", tool_count.toString());
    localStorage.setItem("tool" + tool_count.toString(), tool.value);
    tool.value = "";
    displayTools();
  }
});
tool.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
  if (localStorage.getItem("tool-count") == null) {
    let count = 0;
    localStorage.setItem("tool-count", count.toString());
  }
  if (tool.value.length > 0) {
    let tool_count = Number(localStorage.getItem("tool-count"));
    tool_count += 1;
    localStorage.setItem("tool-count", tool_count.toString());
    localStorage.setItem("tool" + tool_count.toString(), tool.value);
    tool.value = "";
    displayTools();
  }
  }
});

function displayTools() {
  if (localStorage.getItem("tool-count") == null) {
    let count = 0;
    localStorage.setItem("tool-count", count.toString());
  }
  if (localStorage.getItem("delete") == null) {
    let count = 0;
    localStorage.setItem("delete", count.toString());
  }
  tools.innerHTML = "";
  const w = document.createElement("div");
  w.className = "w"
  for (let i = 0; i <= Number(localStorage.getItem("tool-count")); i++) {
  
    if (localStorage.getItem("tool" + i.toString()) != null) {
      const tool_div1 = document.createElement("div");
      const tool = localStorage.getItem("tool" + i.toString());
      const name = localStorage.getItem("tool" + i.toString());
      const tool_div = document.createElement("div");
      const content_paragraph = document.createElement("p");
      const content_paragraph1 = document.createElement("p");
      tool_div.className = "tool-div";
      tool_div1.className = "tool-div";
      content_paragraph1.className = "content_paragraph1";
      content_paragraph.style.marginRight = "20px";
      const edit_btn = document.createElement("button");
      const delete_btn = document.createElement("button");
      edit_btn.className = "edit-btn";
      delete_btn.className = "delete-btn";
      edit_btn.appendChild(document.createTextNode("Edit name"));
      delete_btn.appendChild(document.createTextNode("Delete member"));
      edit_btn.style.marginRight = "20px";
      edit_btn.addEventListener("click", () => {
        let edited_content = prompt(
          "Enter the modified name",
          localStorage.getItem("tool" + i.toString())
        );
        if (edited_content.length>0) {
          edit_btn.parentElement.childNodes[1].innerHTML = edited_content;
        localStorage.setItem("tool" + i.toString(), edited_content);
        displayTools();
        }
      });
      delete_btn.addEventListener("click", 
        () => {
          const  answer = prompt(`Are you sure you want to delete ${tool} ?`,"Yes")
          if (answer === "Yes"){
        delete_btn.parentElement.remove();
        localStorage.removeItem("tool" + i.toString());
        displayTools();}
      });
      content_paragraph.appendChild(document.createTextNode(tool));
      content_paragraph1.appendChild(document.createTextNode(tool));
      const newdiv = document.createElement("div");
      newdiv.className = "new"
      newdiv.appendChild(edit_btn);
      newdiv.appendChild(content_paragraph);
      newdiv.appendChild(delete_btn);
      tool_div1.appendChild(content_paragraph1);
      const div1 = document.createElement("div");
      div1.className = "dd"
      const user = document.createElement("input");
      user.placeholder = "Add New Tool"
      div1.appendChild(user)
      const add = document.createElement("button");
      add.className = "adding";
      add.appendChild(document.createTextNode("Add"));
      div1.appendChild(add);

      const div2 = document.createElement("div");
      div2.className = "div2"
      const div3 = document.createElement("div");
      const dd1 = document.createElement("div");
      dd1.className = 'dd1';
      const dd2 = document.createElement("div");
      dd2.className = 'dd2';
      const dd3 = document.createElement("div");
      dd3.className = 'dd3';
      div3.className = "div22";

      user.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
        if (localStorage.getItem("tool-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("tool-count" + i.toString(), count.toString());
        }
        if (user.value.length > 0) {
            let tool_count = Number(localStorage.getItem("tool-count" + i.toString()));
            tool_count += 1;
            localStorage.setItem("tool-count" + i.toString(), tool_count.toString());
            localStorage.setItem("tool" + i.toString() + tool_count.toString(), user.value);
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed
            const day = currentDate.getDate();
            localStorage.setItem("day" + i.toString() + tool_count.toString(), year + '/' + month + "/" + day + '_' +  currentDate.toDateString().slice(0,3) );
           
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            let st = 'AM'
            if (hours > 12){
              hours = hours - 12;
              st = 'PM';
            }
            if (hours.toString().length < 2) {
              hours = "0" + hours;
            }
            if (minutes.toString().length < 2) {
              minutes = '0'+minutes
            }
            if (seconds.toString().length < 2) {
              seconds = "0" + seconds;
            }
            localStorage.setItem("hour" + i.toString() + tool_count.toString(), hours + ':' + minutes + ':' + seconds + " " + st);
          
            user.value = "";
            displayTools();
        }
        }
      });
      add.addEventListener("click", () => {
        if (localStorage.getItem("tool-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("tool-count" + i.toString(), count.toString());
        }
        if (user.value.length > 0) {
            let tool_count = Number(localStorage.getItem("tool-count" + i.toString()));
            tool_count += 1;
            localStorage.setItem("tool-count" + i.toString(), tool_count.toString());
            localStorage.setItem("tool" + i.toString() + tool_count.toString(), user.value);
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed
            const day = currentDate.getDate();
            localStorage.setItem("day" + i.toString() + tool_count.toString(), year + '/' + month + "/" + day + '_' +  currentDate.toDateString().slice(0,3) );
     
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            let st = 'AM'
            if (hours > 12){
              hours = hours - 11;
              st = 'PM';
            }
            if (hours.toString().length < 2) {
              hours = '0'+hours;
            }
            if (minutes.toString().length < 2) {
              minutes = '0'+minutes
            }
            if (seconds.toString().length < 2) {
              seconds = "0" + seconds;
            }
            localStorage.setItem("hour" + i.toString() + tool_count.toString(), hours + ':' + minutes + ':' + seconds + " " + st);
            
            user.value = "";
            displayTools();
        }
        });

        if (localStorage.getItem("tool-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("tool-count" + i.toString(), count.toString());
        }
        div2.innerHTML = "";
        dd1.innerHTML = "";
        dd2.innerHTML = "";
        dd3.innerHTML = "";
        div3.innerHTML = "";
        let count1 = 1;
        let count2 = 1;
        let count3 = 1;
        for (let j = 0; j <= Number(localStorage.getItem("tool-count" + i.toString())); j++) {
            
            if (localStorage.getItem("tool" + i.toString() + j.toString()) != null) {
            const tool = localStorage.getItem("tool" + i.toString() + j.toString());
            const tool_div = document.createElement("div");
            const content_paragraph = document.createElement("p");
            const tot = document.createElement("div");
            tot.className = "tot";
            const dat = document.createElement("p");
            const tim = document.createElement("p");
            dat.appendChild(document.createTextNode(localStorage.getItem("day" + i.toString() + j.toString())));
            tim.appendChild(document.createTextNode(localStorage.getItem("hour" + i.toString() + j.toString())));
            tot.appendChild(dat);
            tot.appendChild(tim);
            tool_div.className = "tool-div";
            content_paragraph.className = "content_paragraph";
            content_paragraph.style.marginRight = "20px";
            const edit_btn = document.createElement("button");
            const delete_btn = document.createElement("button");
            edit_btn.className = "edit-btn1";
            delete_btn.className = "done";
            edit_btn.appendChild(document.createTextNode("Edit"));
            delete_btn.appendChild(document.createTextNode("returned"));
            edit_btn.style.marginRight = "20px";
            edit_btn.addEventListener("click", () => {
                let edited_content = prompt(
                "Enter the modified tool",
                localStorage.getItem("tool" + i.toString() + j.toString())
                );
                if (edited_content.length>0) {
                  edit_btn.parentElement.parentElement.childNodes[0].innerHTML =
                    edited_content;
                localStorage.setItem("tool" + i.toString() + j.toString(), edited_content);
                displayTools();
                }
            });
            delete_btn.addEventListener("click", () => {
                delete_btn.parentElement.parentElement.remove();
                const val = localStorage.getItem("tool" + i.toString() + j.toString());
                localStorage.setItem("did" + i.toString() + j.toString(), val);
                localStorage.removeItem("tool" + i.toString() + j.toString());
                displayTools()
            });
            const delete_btn1 = document.createElement("button");
            delete_btn1.className = "delete-btn1";
            delete_btn1.appendChild(document.createTextNode("delete"));
            delete_btn1.addEventListener("click", () => {
              const  answer = prompt(`Are you sure you want to delete ${tool} ?`,"Yes")
                if (answer === "Yes"){
                delete_btn1.parentElement.parentElement.remove();
                const val = localStorage.getItem("tool" + i.toString() + j.toString());
                const num = Number(localStorage.getItem('delete'))
                localStorage.setItem("delete" + num.toString(),name +" "+ "taken tool" + ' ' + localStorage.getItem("tool" + i.toString() + j.toString())+ " " + localStorage.getItem("day" + i.toString() + j.toString())+' ' + localStorage.getItem("hour" + i.toString() + j.toString()));
                localStorage.setItem('delete',(num+1).toString())
                localStorage.removeItem("tool" + i.toString() + j.toString());
                displayTools()}
            });
            content_paragraph.appendChild(document.createTextNode(count1.toString() + '.' + tool));
            count1 = count1 + 1;
            const newdiv = document.createElement("div");
            const newdiv1 = document.createElement("div");
            newdiv.className = "new1"
            newdiv.appendChild(content_paragraph);
            newdiv1.appendChild(tot);
            newdiv1.appendChild(edit_btn);
            newdiv1.appendChild(delete_btn);
            newdiv1.appendChild(delete_btn1)
            newdiv1.className = 'divv'
            newdiv.appendChild(newdiv1);
            dd1.appendChild(newdiv)
          }
          
          if (localStorage.getItem("did" + i.toString() + j.toString()) != null) {
            const tot = document.createElement("div");
            tot.className = "tot";
            const dat = document.createElement("p");
            const tim = document.createElement("p");
            dat.appendChild(document.createTextNode(localStorage.getItem("day" + i.toString() + j.toString())));
            tim.appendChild(document.createTextNode(localStorage.getItem("hour" + i.toString() + j.toString())));
            tot.appendChild(dat);
            tot.appendChild(tim);
            const tool = localStorage.getItem("did" + i.toString() + j.toString());
            const tool_div = document.createElement("div");
            const content_paragraph = document.createElement("p");
            tool_div.className = "tool-div";
            content_paragraph.className = "content_paragraph1 ";
            content_paragraph.style.marginRight = "20px";
            const delete_btn = document.createElement("button");
            delete_btn.className = "delete-btn1";
            delete_btn.appendChild(document.createTextNode("delete"));
            delete_btn.addEventListener("click", () => {
              const  answer = prompt(`Are you sure you want to delete ${tool} ?`,"Yes")
                if (answer === "Yes"){
                delete_btn.parentElement.parentElement.remove();
                const val = localStorage.getItem("tool" + i.toString() + j.toString());
                const num = Number(localStorage.getItem('delete'))
                localStorage.setItem("delete" + num.toString(),name +" "+ "Returned Tools" + ' ' + localStorage.getItem("did" + i.toString() + j.toString())+ " " + localStorage.getItem("day" + i.toString() + j.toString())+' ' + localStorage.getItem("hour" + i.toString() + j.toString()));
                localStorage.setItem('delete',(num+1).toString())
                localStorage.removeItem("did" + i.toString() + j.toString());
                displayTools()
              }
            });
            content_paragraph.appendChild(document.createTextNode(count2.toString() + '.' + tool));
            count2 = count2 + 1;
            const newdiv = document.createElement("div");
            const newdiv1 = document.createElement("div");
            newdiv.className = "new1"
            newdiv.appendChild(content_paragraph);
            newdiv1.appendChild(tot);
            newdiv1.appendChild(delete_btn);
            newdiv1.className = 'divv'
            newdiv.appendChild(newdiv1);
            dd2.appendChild(newdiv)
        }
        }
      
    if (count1 > 1) {
      const d1 = document.createElement('div') 
      d1.className = 'dd1'
      const para1 = document.createElement('p')
      para1.appendChild(document.createTextNode((count1-1).toString() + ' Tools Taken'));
      para1.className = "t1";
      d1.appendChild(para1)
      d1.appendChild(dd1)
      div2.appendChild(d1);
    }
    if (count2 > 1) {
      const d2 = document.createElement('div') 
      d2.className = 'dd2'
      const para1 = document.createElement('p')
      para1.appendChild(document.createTextNode((count2-1).toString() + ' Tools Returned'));
      para1.className = "t1";
      d2.appendChild(para1)
      d2.appendChild(dd2)
      div2.appendChild(d2);
    }
      
      tool_div.appendChild(newdiv);
      tool_div.appendChild(div1);
      tool_div.appendChild(div2);
      tool_div1.appendChild(div3);
      tools.appendChild(tool_div);
      w.appendChild(tool_div1);
    }
  }
  const tool_divnew = document.createElement("div");
  const tool_divnew1 = document.createElement("div");
  tool_divnew1.className = "div21";
  tool_divnew.className = "tool-div11";
  
  let d = 0
  for (let i = 0; i < Number(localStorage.getItem("delete")); i++) {
    if (localStorage.getItem("delete" + i.toString()) != null) {
      d = d + 1
      const tool = localStorage.getItem("delete" + i.toString());
      const content_paragraph = document.createElement("p");
      content_paragraph.appendChild(document.createTextNode(d.toString() + "."+tool));
      const just = document.createElement('div')
      just.className = 'just'
      const delete_btn = document.createElement('button')
      delete_btn.className = "delete-btn1";
      delete_btn.appendChild(document.createTextNode("delete"));
      delete_btn.addEventListener("click", () => {
        delete_btn.parentElement.parentElement.remove();
        localStorage.removeItem("delete" + i.toString());
        displayTools();
      });
      just.appendChild(content_paragraph);
      just.appendChild(delete_btn)
      tool_divnew1.appendChild(just)
    }
  }
  if (d > 0 && localStorage.getItem("delete")) {
    const delete_btn = document.createElement("button");
    delete_btn.className = "delete-btn1";
    delete_btn.appendChild(document.createTextNode("delete"));
    delete_btn.addEventListener("click", () => {
      
      delete_btn.parentElement.parentElement.remove();
      localStorage.removeItem("delete");
      displayTools();
    });
   
    const content_paragraph = document.createElement("p");
    content_paragraph.className = 'hmm'
    content_paragraph.appendChild(document.createTextNode(d.toString() + " tools deleted"));
   
    const ddd = document.createElement("div");
    ddd.className = "ddd";
    ddd.appendChild(content_paragraph);
    ddd.appendChild(delete_btn);
    tool_divnew.appendChild(ddd)
    tool_divnew.appendChild(tool_divnew1)
    tools.appendChild(tool_divnew);
  }
}
