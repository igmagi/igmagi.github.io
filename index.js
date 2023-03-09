const initMenuScroll = () => {
        var c,
        currentScrollTop = 0,
        navbar = document.querySelector("nav");

        document.addEventListener("scroll", function () {
            var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            var b = navbar.offsetHeight;

            currentScrollTop = a;

            if (c < currentScrollTop && a > b + b) {
                navbar.classList.add("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                navbar.classList.remove("scrollUp");
            }
            c = currentScrollTop;

        });
};

// const initAboutAnim = () => {
//     let about = document.querySelector("#about");
//     let aboutbg = document.querySelector("#about-bg");
//     document.addEventListener("scroll", function () {
//         var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//         var b = about.offsetHeight;

//         currentScrollTop = a;
//         aboutbg.style.left = `-${(currentScrollTop/b)*100 * 1.5}%`
//     });
// }

class toC {
    constructor(){
        this.l = undefined;
    }
    save(to) {
        if(this.l) clearTimeout(this.l) 
        this.l = to;
    }
}
// const initEducationExplanations = () => {
//     const expls = {
//         fp: document.querySelector("#fp-explanation"),
//         it: document.querySelector("#it-explanation") 
//     }
//     let toc = new toC();
//     const links = document.querySelectorAll(".expl-link");
//     links.forEach(link => {
//     //     link.addEventListener("mouseover", (ev)=>{
//     //         expls[targetId].style.display = "block";

//     // })
//     //     link.addEventListener("mouseout", (ev)=>{
//     //         expls[targetId].style.display = "none";

//     // })
//         link.addEventListener("click", (ev)=>{
//             targetId = ev.currentTarget.id
//             if(expls[targetId].classList.contains("animate-explanation")){
//                 expls["fp"].classList.remove("animate-explanation");
//                 expls["it"].classList.remove("animate-explanation");
//                 return;
//             }

//             expls["fp"].classList.remove("animate-explanation");
//             expls["it"].classList.remove("animate-explanation");
//             expls[targetId].classList.add("animate-explanation");

//             toc.save(setTimeout(()=>{
//                 expls[targetId].classList.remove("animate-explanation")
//             },7000))
//         })
//     })
    

// }

const initProjects = () => {
    console.log(projects)
    const projWrapper = document.querySelector("#projects-wrapper");
    projects.map((pr)=>{
        var node_0 = document.createElement("A");
        node_0.setAttribute('href', pr?.links?.live ? pr?.links?.live : pr?.links?.git);
        node_0.setAttribute("target", "_blank")
        
        var node_1 = document.createElement('DIV');
        node_1.setAttribute('class', 'project');

        node_0.appendChild(node_1);

        var node_2 = document.createElement('DIV');
        node_2.setAttribute('class', 'project-title');
        node_1.appendChild(node_2);

        var node_3 = document.createTextNode((new String(pr.title)));
        node_2.appendChild(node_3);

        var node_4 = document.createElement('DIV');
        node_4.setAttribute('class', 'project-description');
        node_1.appendChild(node_4);

        var node_5 = document.createTextNode((new String(pr.description)));
        node_4.appendChild(node_5);

        var node_6 = document.createElement('DIV');
        node_6.setAttribute('class', 'project-labels');
        node_1.appendChild(node_6);

        pr.tags.map(lab=>{
            var node_7 = document.createElement('SPAN');
            node_6.appendChild(node_7);

            var node_8 = document.createTextNode((new String(lab)));
            node_7.appendChild(node_8);
        })

        projWrapper.appendChild(node_0)
    })
}
const initCopyListeners = () => {
    let tlph = document.querySelector(".phone");
    let email = document.querySelector(".email");

    tlph.addEventListener("click", handleCopy)
    email.addEventListener("click", handleCopy)

}

const handleCopy = (ev)=>{
    let toc = new toC()
    let tt = document.querySelector(".tooltip");
    if(tt.classList.contains("animate-tool")){
        tt.classList.remove("animate-tool");
        return;
    }

    tt.style.top = `${ev.pageY}px`
    tt.style.left = `${ev.pageX}px`
    tt.classList.add("animate-tool");

    toc.save(setTimeout(()=>{
        tt.classList.remove("animate-tool")
    },1500))
    
    navigator.clipboard.writeText(ev.currentTarget.getAttribute("cp-data"));
}

document.addEventListener("DOMContentLoaded", ()=>{
    initProjects();
    initMenuScroll();
    //initAboutAnim();
    initCopyListeners();
    // initEducationExplanations();
})