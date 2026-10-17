window.onload = () => {
    const storiesList = document.getElementById('storiesList');
    const stories = JSON.parse(localStorage.getItem('stories')) || [];

    if (stories.length > 0) {
        stories.forEach((story, index) => {
            const storyCard = document.createElement('div');
            storyCard.className = 'story-card';

            const title = document.createElement('h2');
            title.innerHTML = story.title;  // Display title

            const contentPreview = document.createElement('p');
            contentPreview.innerHTML = story.content.substring(0, 200) + '...';  // Display first 200 characters

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => {
                localStorage.setItem('currentStory', JSON.stringify(story));
                window.location.href = 'write.html';  // Navigate to the writing page
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                stories.splice(index, 1);
                localStorage.setItem('stories', JSON.stringify(stories));
                window.location.reload();  // Refresh the page to reflect deletion
            };

            storyCard.appendChild(title);
            storyCard.appendChild(contentPreview);
            storyCard.appendChild(editButton);
            storyCard.appendChild(deleteButton);

            storiesList.appendChild(storyCard);
        });
    } else {
        storiesList.innerHTML = '<p>No stories found. Please write a story first.</p>';
    }
};
