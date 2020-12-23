window.onload = function () {

    // attach event listeners to navbar links
    $('#logo').on("click", handleLogoBtnPress);
    $('#about').on("click", handleAbtBtnPress);
    $('#work').on("click", handleWorkBtnPress);
    $('#skills').on("click", handleSkillsBtnPress);
    $('#projects').on("click", handleProjectsBtnPress);
    $('#extra').on("click", handleExtraBtnPress);
    $('#links').on("click", handleLinksBtnPress);

    // attach event listeners to links
    $('#github').on("click", handleGitHubBtnPress);
    $('#linkedin').on("click", handleLinkedInBtnPress);
    $('#resume').on("click", handleResumeBtnPress);


};

let handleLogoBtnPress = function () {
    location.href = "#start";
}

let handleAbtBtnPress = function () {
    location.href = "#about_tab";
}

let handleWorkBtnPress = function () {
    location.href = "#work_tab";
}

let handleSkillsBtnPress = function () {
    location.href = "#skills_tab";
}

let handleProjectsBtnPress = function () {
    location.href = "#projects_tab";
}

let handleExtraBtnPress = function () {
    location.href = "#extra_tab";
}

let handleLinksBtnPress = function () {
    location.href = "#links_tab";
}

let handleGitHubBtnPress = function () {
        window.open("https://github.com/kyruu", "_blank");
};

let handleLinkedInBtnPress = function () {
    window.open("https://www.linkedin.com/in/kyle-maatallah/", "_blank");
};

let handleResumeBtnPress = function () {
    window.open("Kyle_Maatallah_Resume.pdf");
};