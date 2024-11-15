const toggleVisibility = (hideSelector, showSelector) => {
    document.querySelector(hideSelector).classList.add('hidden');
    document.querySelector(showSelector).classList.remove('hidden');
};
const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
const loadFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || {};
};
const contentProfile = (data) => {
    document.querySelector('.profile-name').textContent = data.name || 'Nama';
    document.querySelector('.profile-title').textContent = data.role || 'Role';
    document.querySelector('.profile-info').innerHTML = `
        <li><strong>Availability</strong>: ${data.availability || 'Availability'}</li>
        <li><strong>Usia</strong>: ${data.age || 'Age'}</li>
        <li><strong>Lokasi</strong>: ${data.location || 'Location'}</li>
        <li><strong>Pengalaman</strong>: ${data.experience || 'Experience'} Tahun</li>
        <li><strong>Email</strong>: ${data.email || 'Email'}</li>
    `;
};
document.querySelector('.btn-edit').addEventListener('click', () => {
    toggleVisibility('.profile-section', '.form-section');
});
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        availability: document.getElementById('availability').value,
        age: document.getElementById('age').value,
        location: document.getElementById('location').value,
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value,
    };
    saveToLocalStorage('profileData', formData);

    contentProfile(formData);

    toggleVisibility('.form-section', '.profile-section');
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = loadFromLocalStorage('profileData');
    contentProfile(savedData);
});
