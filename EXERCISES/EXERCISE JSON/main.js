async function getData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Error HTTP: ' + ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        const headDevelopers = document.getElementById('head-developers');
        const headRow = document.createElement('tr');

        const headers = ['Nombre', 'Edad', 'Especilidad', 'Dirección', 'Email'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headRow.appendChild(th);
        })

        headDevelopers.appendChild(headRow);

        const bodyDevelopers = document.getElementById('body-developers');
        data.desarrollador.forEach(element => {
            const bodyRow = document.createElement('tr');

            const name = document.createElement('td');
            name.textContent = element.nombre;
            bodyRow.appendChild(name);

            const age = document.createElement('td');
            age.textContent = element.edad;
            bodyRow.appendChild(age);

            const especiality = document.createElement('td');
            especiality.textContent = element.especialidad;
            bodyRow.appendChild(especiality);

            const address = document.createElement('td');
            const direccion = element.direccion[0];
            address.textContent = `Calle: ${direccion.calle}, #${direccion.numero}`;
            bodyRow.appendChild(address);

            const email = document.createElement('td');
            email.textContent = element.email;
            bodyRow.appendChild(email);

            bodyDevelopers.appendChild(bodyRow);
        });
    }
    catch (error) {
        console.error('Error al obtener los datos', error);
    }
}

getData();