// Toolbar options for Quill editor
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        
    ['blockquote', 'code-block'],
    [{'header': 1}, {'header': 2}],               
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}],      
    [{'indent': '-1'}, {'indent': '+1'}],         
    [{'direction': 'rtl'}],                        
    [{'size': ['small', false, 'large', 'huge']}],  
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}],          
    [{'font': []}],
    [{'align': []}],
    ['clean'],
    ['link', 'image', 'video']
];

// Initialize Quill editor for the story
var quill = new Quill('#editor-container', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: '     Write your story here...',
    theme: 'snow'
});

// Initialize Quill editor for the title with the same toolbar
var quillTitle = new Quill('#title', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Title of your story...',
    theme: 'bubble'  // Using bubble theme for cleaner look on title
});

// Function to load a story if it exists in localStorage
document.addEventListener('DOMContentLoaded', function() {
    var currentStory = JSON.parse(localStorage.getItem('currentStory'));
    if (currentStory) {
        quillTitle.setText(currentStory.title); // Set the title in Quill editor for title
        quill.setContents(quill.clipboard.convert(currentStory.content)); // Convert HTML and set it in Quill editor for story
    }
});

// Save story function
document.getElementById('save-btn').addEventListener('click', function() {
    var title = quillTitle.getText();
    var content = quill.root.innerHTML;
    var stories = JSON.parse(localStorage.getItem('stories')) || [];
    stories.push({ title, content });
    localStorage.setItem('stories', JSON.stringify(stories));
    alert('Story saved!');
});

// Delete story function
document.getElementById('delete-btn').addEventListener('click', function() {
    localStorage.removeItem('currentStory'); // Ensure to remove the current editing story if any
    quillTitle.setText('');
    quill.setText('');
    alert('Story deleted!');
});
document.getElementById('delete-btn').addEventListener('click', function() {
    var stories = JSON.parse(localStorage.getItem('stories')) || [];
    if (currentStory) {
        var index = stories.findIndex(story => story.title === currentStory.title && story.content === currentStory.content);
        if (index !== -1) {
            stories.splice(index, 1);
            localStorage.setItem('stories', JSON.stringify(stories));
            alert('Story deleted!');
            window.location.reload();
        }
    }
});