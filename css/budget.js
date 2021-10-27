function adddata(){
  if(!localStorage.getItem("add_rec")){
      let li=[];
      localStorage.setItem("add_rec",JSON.stringify(li));
    }
  let add={};
  add["name"]=document.getElementById("name").value;
  add["name1"]=document.getElementById("name").value;
  add["budget"]=document.getElementById("budget").value;

  let list=JSON.parse(localStorage.getItem("add_rec"));
  list.push(add);
  localStorage.setItem("add_rec", JSON.stringify(list));

}

function table(){
          let var1=document.getElementById("name").value;
          let var2=document.getElementById("name1").value;
          let var3=document.getElementById("budget").value;
          document.getElementById("body").innerHTML += `<tr>
                                               <td>${var1}</td>
                                               <td>${var2}</td>
                                               <td>${var3}</td>
                                               </tr>
                                                    `;

      }
function add_budget()
{
    let form=`<form action="" method="get" className="">
      <div className="form-example">
        <label htmlFor="name">Enter Client Name: </label>
        <input type="text" name="name" id="name" required>
      </div>
      <div className="form-example">
        <label htmlFor="name1">Enter Project Name: </label>
        <input type="text" name="name" id="name1" required>
      </div>
      <div className="form-example">
        <label htmlFor="name">Enter Budget: </label>
        <input type="text" name="budget" id="budget" required>
      </div>
      <div className="form-example">
        <input type="button" id="click" value="click" onclick="adddata()">
      </div>
    </form>`;
    document.getElementById("budget_form").innerHTML=form;

}
function save_form(){
  if (!localStorage.getItem("budget_list"))
        {
          let list=[]
          localStorage.setItem(("budget_list",JSON.stringify(list)));
        }
        let budget_json={}
        budget_json["cname"]=document.getElementById("name").value;
        budget_json["pname"]=document.getElementById("name1").value;
        budget_json["budget"]=document.getElementById("budget").value;

        let list1=JSON.parse(localStorage.getItem("budget_list"));
        list1.push(budget_json);
        localStorage.setItem("budget_list",JSON.stringify(list1));
        document.getElementById("budget_form").innerHTML="Record Successfully Added";

}

function view_budget()
{

  let list=JSON.parse(localStorage.getItem("add_rec"));
  let data=`<table><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>`;
  for (let i=0;i<list.length;i++)
    {
      data+=`<tr><td>${list[i].name}</td><td>${list[i].name1}</td><td>${list[i].budget}</td></tr>`;
    }
  data+=`</table>`;
    document.getElementById("budget_form").innerHTML=data;
}

