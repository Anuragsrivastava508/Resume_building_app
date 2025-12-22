function generateResume(){
  set("r-name","name");
  set("r-summary","summary");
  set("r-skills","skills");
  set("r-education","education");
  set("r-experience","experience");

  document.getElementById("r-contact").innerText =
    email.value + " | " + phone.value;

  localStorage.setItem("resumeData",
    document.getElementById("resume").innerHTML);
}

function set(out,inp){
  document.getElementById(out).innerText =
    document.getElementById(inp).value;
}

function changeTheme(){
  resume.className="resume-preview "+theme.value;
}

function downloadPDF(){
  html2pdf().from(resume).save("resume.pdf");
}
