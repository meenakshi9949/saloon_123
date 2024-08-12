const galleryData = [
    {
      image: '',
      description: 'Hair Styling',
    },
    {
      image: '',
      description: 'Makeup Art',
    },
    {
      image: '',
      description: 'Manicure & Pedicure',
    },
    {
      image: '',
      description: 'Facial Treatments',
    },
    {
      image: '',
      description: 'Hair Coloring',
    },
    {
      image: '',
      description: 'Massage Therapy',
    },
  ];

  function createGallery() {
    const gallery = document.getElementById('gallery');

    galleryData.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = item.image;

      const description = document.createElement('div');
      description.className = 'gallery-item-description';
      description.textContent = item.description;

      galleryItem.appendChild(img);
      galleryItem.appendChild(description);
      gallery.appendChild(galleryItem);
    });
  }

  document.addEventListener('DOMContentLoaded', createGallery);