# Ex.07 Design of Interactive Image Gallery
## Date:

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
interactive.html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>My Image Gallery</title>
<style>
  body { font-family: Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 0; text-align: center; }
  .gallery { display: flex; justify-content: center; gap: 20px; margin-top: 40px; }
  .thumbnail { width: 120px; height: 120px; object-fit: cover; border-radius: 10px; cursor: pointer; box-shadow: 0 2px 8px #bbb; transition: transform 0.2s; }
  .thumbnail:hover { transform: scale(1.05); }
  .credit { margin: 40px 0 10px 0; color: #444; font-size: 1rem; }
  .designer { font-weight: bold; letter-spacing: 1px; }

  /* Modal (overlay) styles */
  .modal { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(30, 30, 30, 0.8); justify-content: center; align-items: center; z-index: 1000; }
  .modal.active { display: flex; }
  .modal-content { background: #fffbea; padding: 30px; border-radius: 14px; box-shadow: 0 4px 40px #222; animation: pop 0.38s cubic-bezier(0.53, 1.7, 0.34, 0.64); position: relative;}
  .modal-image { width: 320px; height: auto; border-radius: 10px; }
  .close { position: absolute; top: 10px; right: 18px; font-size: 30px; color: #333; cursor: pointer; font-weight: bold; }

  @keyframes pop {
    0% { transform: scale(0.8);}
    75% {transform: scale(1.1);}
    100% { transform: scale(1);}
  }
</style>
</head>
<body>
  <div class="gallery">
    <img src="scene1.jpg" class="thumbnail" alt="1"/>
    <img src="scene2.jpg" class="thumbnail" alt="2"/>
    <img src="scene3.jpg" class="thumbnail" alt="3"/>
  </div>
  <div class="credit">©Image Gallery Designed by:<br/><span class="designer">MUTHUKUMARAN NM</span></div>

  <!-- Modal overlay -->
  <div class="modal" id="modal">
    <div class="modal-content">
      <span class="close" id="closeBtn">&times;</span>
      <img id="modalImg" class="modal-image" src="" alt="Large View"/>
    </div>
  </div>

  <script>
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeBtn');

  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  closeBtn.onclick = function() {
    modal.classList.remove('active');
    modalImg.src = '';
  };

  // Optional: close modal when clicking the overlay
  modal.onclick = function(e) {
    if(e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
    }
  }
  </script>
</body>
</html>

style.css

body {
    font-family: sans-serif;
    margin: 20px;
    background-color: #f0f0f0;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}


.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    max-width: 1200px;
    margin: 0 auto;
}

.gallery-item {
    width: 100%;
    height: 200px; 
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.gallery-item:hover {
    transform: scale(1.03);
    opacity: 0.8;
}


.modal {
    
    display: none; 
    position: fixed; 
    z-index: 1000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0,0,0,0.9); 
}


.modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 900px;
    max-height: 90%;
    object-fit: contain; 
    animation-name: zoom;
    animation-duration: 0.6s;
}


#caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 900px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
}


.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
}


@keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
}

text.js

const modal = document.getElementById("imageModal");

const fullImage = document.getElementById("fullImage");

const captionText = document.getElementById("caption");

/**
 * Opens the modal and displays the full-size image.
 * @param {HTMLElement} imgElement - The clicked thumbnail image element.
 */
function openModal(imgElement) {
    modal.style.display = "block";
    const fullSrc = imgElement.getAttribute("data-full");
    fullImage.src = fullSrc;
    captionText.innerHTML = imgElement.alt;
}

function closeModal() {
    modal.style.display = "none";

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
}

```

## OUTPUT:

![alt text](<Screenshot 2025-12-25 145400.png>)
![alt text](<Screenshot 2025-12-25 145418.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
