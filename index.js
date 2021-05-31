const box = document.getElementById("box");
const title = document.getElementById("title");
const image = document.getElementById("image");
const tab_switcher = document.getElementById("tab-switcher");

const list = new Linkedlist();

const data = [
    { title: "Chrome", value: "This is a window that contains chrome", url: "https://www.xda-developers.com/files/2018/01/Chrome-Feature-Image-Background-Colour.png"},
    { title: "VS Code", value: "This is a window that contains VS code", url: "https://res.cloudinary.com/practicaldev/image/fetch/s--mF20uxm0--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ikysur95osy0deokuuji.png"},
    { title: "Calendar", value: "This is window that contains Calendar", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Calendar_icon.svg/1200px-Google_Calendar_icon.svg.png"},
    { title: "Maps", value: "This is a window that conatains Maps", url: "https://cdn.dribbble.com/users/869811/screenshots/9978997/google-maps-redesign_4x.png"},
    { title: "Photos", value: "This is a window that contains photos", url: "https://cdn.worldvectorlogo.com/logos/google-photos.svg"},
    { title: "Sublime", value: "This is a window that contains Sublime text 2", url: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sublime_Text_3_logo.png"},
    { title: "Final Cut", value: "This is a window that conatins Final Cut pro X", url: "data:image/jpeg;base64,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"}
];

for(let i in data)
    list.add({id: i});

tab_switcher.hidden = true;
let tabbable = false;

let point, children, offset;

setState();

document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === "Control"){
        tabbable = true;
        point = list.head;
    }
    if(e.key === "q" && tabbable){
        tab_switcher.hidden = false;
        children[offset].classList.remove("sel");
        if(!point.next){  //it means point is at last element hence point it to head
            point = list.head;
            offset = 0;
        }
        else{
            point = point.next;
            offset++;
        }
        children[offset].classList.add("sel");
    }
});

document.addEventListener('keyup', function(e){
    if(e.key === "Control"){
        tabbable = false;
        list.move_to_front(point);
        tab_switcher.hidden = true;
        setState();
    }
});

function setState(){
    image.src = data[list.head.content.id].url;
    title.innerHTML = data[list.head.content.id].title;
    box.innerHTML = data[list.head.content.id].value; 

    tab_switcher.innerHTML = "";
 
    for(let n = list.head; !!n; n= n.next)
        tab_switcher.innerHTML += `<li class="list-group-item"><img src="${data[n.content.id].url}"><p>${data[n.content.id].title}</p></li>`

    children = tab_switcher.childNodes;
    children[0].classList.add("sel");
    offset = 0;
}
 