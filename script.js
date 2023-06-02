document.getElementById('wrapper').style.display = 'none';

let home = document.getElementById('home');
home.onclick = function() {
    document.getElementById('fixed-content').style.display = 'block';
    document.getElementById('content-Aboutme').style.display = 'none';
    document.getElementById('wrapper').style.display = 'none';
    document.getElementById('content-Hobby').style.display = 'none';
    document.getElementById('content-Goal').style.display = 'none';

    Aboutme = document.getElementById('Aboutme');
    Aboutme.style.border = 'none';
    Aboutme.style.fontStyle = 'normal';
    Aboutme.style.fontWeight = 'normal';
    hobby = document.getElementById('hobby');
    hobby.style.border = 'none';
    hobby.style.fontStyle = 'normal';
    hobby.style.fontWeight = 'normal';
    goal = document.getElementById('goal');
    goal.style.border = 'none';
    goal.style.fontStyle = 'normal';
    goal.style.fontWeight = 'normal';
};

let Aboutme = document.getElementById('Aboutme');
Aboutme.onclick = function() {
    document.getElementById('fixed-content').style.display = 'block';
    document.getElementById('content-Aboutme').style.display = 'block';
    document.getElementById('wrapper').style.display = 'block';
    document.getElementById('content-Hobby').style.display = 'none';
    document.getElementById('content-Goal').style.display = 'none';

    Aboutme.style.fontStyle = 'italic';
    Aboutme.style.fontWeight = 'bold';
    hobby = document.getElementById('hobby');
    hobby.style.border = 'none';
    hobby.style.fontStyle = 'normal';
    hobby.style.fontWeight = 'normal';
    goal = document.getElementById('goal');
    goal.style.border = 'none';
    goal.style.fontStyle = 'normal';
    goal.style.fontWeight = 'normal';
};

let hobby = document.getElementById('hobby');
hobby.onclick = function() {
    document.getElementById('fixed-content').style.display = 'none';
    document.getElementById('content-Aboutme').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
    document.getElementById('content-Hobby').style.display = 'block';
    document.getElementById('content-Goal').style.display = 'none';

    Aboutme = document.getElementById('Aboutme');
    Aboutme.style.border = 'none';
    Aboutme.style.fontStyle = 'normal';
    Aboutme.style.fontWeight = 'normal';
    hobby.style.fontStyle = 'italic';
    hobby.style.fontWeight = 'bold';
    goal = document.getElementById('goal');
    goal.style.border = 'none';
    goal.style.fontStyle = 'normal';
    goal.style.fontWeight = 'normal';
}

let goal = document.getElementById('goal');
goal.onclick = function() {
    document.getElementById('fixed-content').style.display = 'none';
    document.getElementById('content-Aboutme').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
    document.getElementById('content-Hobby').style.display = 'none';
    document.getElementById('content-Goal').style.display = 'block';

    Aboutme = document.getElementById('Aboutme');
    Aboutme.style.border = 'none';
    Aboutme.style.fontStyle = 'normal';
    Aboutme.style.fontWeight = 'normal';
    hobby = document.getElementById('hobby');
    hobby.style.border = 'none';
    hobby.style.fontStyle = 'normal';
    hobby.style.fontWeight = 'normal';
    goal = document.getElementById('goal');
    goal.style.border = 'none';
    goal.style.fontStyle = 'italic';
    goal.style.fontWeight = 'bold';
}