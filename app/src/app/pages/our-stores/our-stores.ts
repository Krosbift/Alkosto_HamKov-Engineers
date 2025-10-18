import { Component } from '@angular/core';

type Store = {
  name: string;
  address: string;
  scheduleToday: string;
  schedule: string[];
};

@Component({
  selector: 'app-our-stores',
  imports: [],
  templateUrl: './our-stores.html',
  styleUrl: './our-stores.scss'
})
export class OurStores {

  protected scheduleToday() {
    const day = new Date().getDay()
    return day - 1;
  }

  protected openOrClose(item: Store): boolean {
    const hour = new Date().getHours();
    const today = item.schedule[this.scheduleToday()];

    const hola = today.split(": ");
    const [ open, close ] = hola[1].split(" - ") // ["08:00 a. m."] || [9:00 p. m.]

    const hourOpen = this.toHour(open);
    const hourClose = this.toHour(close);

    return ( hourOpen <= hour && hour <= hourClose);
  }

  protected toHour(hour: string): number { // ["08:00 a. m."] || [9:00 p. m.]
    const [ hourNumber, rest ] = hour.split(":");
    const hourToNumber = Number(hourNumber);
    const resultHour = rest.indexOf("a. m.") != -1 ? hourToNumber : hourToNumber + 12;
    return hourToNumber == 12 ? 0 : resultHour;
  }

  protected readonly stores: Store[] = [
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Barranquilla",
      address: "Calle 98 No. 51B - 91, Sector Buenavista",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 8:00 a.m. - 9:00 p.m.",
        "Martes: 8:00 a.m. - 9:00 p.m.",
        "Miércoles: 8:00 a.m. - 9:00 p.m.",
        "Jueves: 8:00 a.m. - 9:00 p.m.",
        "Viernes: 8:00 a.m. - 9:00 p.m.",
        "Sábado: 8:00 a.m. - 9:00 p.m.",
        "Domingo: 8:00 a.m. - 9:00 p.m.",
      ]
    },
    {
      name: "Alkosto Bolívar",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "Cl 22 No. 6 - 28, Avenida Bolívar",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Cali Norte",
      address: "Cr 1 con, Cl. 62 Nte",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Cali Sur",
      address: "Cl 13 No. 80 - 187",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Calle 170",
      address: "Cr 69 No. 170 - 15",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Carrera 30",
      address: "Cr 30 No. 10 - 25",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto El Edén",
      address: "Av Boyacá No. 15 - 98, Lc 1 -102 y 2 - 116",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Floridablanca",
      address: "Anillo vial km 2.5 Girón, Bucaramanga",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Ipiales 20 de Julio",
      address: "Cr 5A No. 8-36, Parque 20 de Julio",
      scheduleToday: "hoy de 08:00 a. m. - 8:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 8:00 p. m.",
        "Martes: 08:00 a. m. - 8:00 p. m.",
        "Miércoles: 08:00 a. m. - 8:00 p. m.",
        "Jueves: 08:00 a. m. - 8:00 p. m.",
        "Viernes: 08:00 a. m. - 8:00 p. m.",
        "Sábado: 07:00 a. m. - 8:00 p. m.",
        "Domingo: 07:00 a. m. - 8:00 p. m.",
      ]
    },
    {
      name: "Alkosto Ipiales Gran Plaza",
      address: "Cl 25 No. 6B–23, C.C Gran Plaza",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Mosquera",
      address: "Calle 3 #14a-16",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 08:00 a. m. - 9:00 p. m.",
        "Martes: 08:00 a. m. - 9:00 p. m.",
        "Miércoles: 08:00 a. m. - 9:00 p. m.",
        "Jueves: 08:00 a. m. - 9:00 p. m.",
        "Viernes: 08:00 a. m. - 9:00 p. m.",
        "Sábado: 07:00 a. m. - 9:00 p. m.",
        "Domingo: 07:00 a. m. - 9:00 p. m.",
      ]
    },
    {
      name: "Alkosto Outlet - Bodega de remates",
      address: "Ac. 45A Sur No. 51 - 90",
      scheduleToday: "hoy de 10:00 a. m. - 7:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    {
      name: "Alkosto Avenida 68",
      address: "Av Cr 68 No. 72 - 43, Bogotá",
      scheduleToday: "hoy de 08:00 a. m. - 9:00 p. m.",
      schedule: [
        "Lunes: 10:00 a.m. - 8:00 p.m.",
        "Martes: 10:00 a.m. - 8:00 p.m.",
        "Miércoles: 10:00 a.m. - 8:00 p.m.",
        "Jueves: 10:00 a.m. - 8:00 p.m.",
        "Viernes: 10:00 a.m. - 8:00 p.m.",
        "Sábado: 10:00 a.m. - 8:00 p.m.",
        "Domingo: 10:00 a.m. - 6:00 p.m.",
      ]
    },
    // {
    //   name: "Alkosto Barranquilla",
    //   address: "Calle 98 No. 51B - 91, Sector Buenavista, Barranquilla",
    //   horario: "L–D 8:00–21:00",
    //   telefono: "(601) 407 3033"
    // },
    // {
    //   name: "Alkosto Bolivar",
    //   address: "Cl 22 No. 6 - 28, Avenida Bolívar, Pasto",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(602) 773 2208"
    // },
    // {
    //   name: "Alkosto Cali Norte",
    //   address: "Cr 1 con, Cl. 62 Nte, Cali",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 407 3033"
    // },
    // {
    //   name: "Alkosto Cali Sur",
    //   address: "Cl 13 No. 80 - 187, Cali",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Calle 170",
    //   address: "Cr 69 No. 170 - 15, Bogotá",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Carrera 30",
    //   address: "Cr 30 No. 10 - 25, Bogotá",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto El Edén",
    //   address: "Av Boyacá No. 15 - 98, Lc 1 -102 y 2 - 116, Bogotá",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Floridablanca",
    //   address: "Anillo vial km 2.5 Girón, Bucaramanga",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Ipiales 20 de Julio",
    //   address: "Cr 5A No. 8-36, Parque 20 de Julio, Ipiales",
    //   horario: "L–V 8:00–20:00 · S/D/F 7:00–20:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Ipiales Gran Plaza",
    //   address: "Cl 25 No. 6B–23, C.C Gran Plaza, Ipiales",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Mosquera",
    //   address: "Calle 3 #14a-16, Mosquera",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Outlet - Bodega de remates",
    //   address: "Ac. 45A Sur No. 51 - 90, Bogotá",
    //   horario: "L–Mi/V 10:00–19:00 · J 8:00–19:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Pasto Centro",
    //   address: "Cl 19 No. 28 - 89, Centro, Pasto",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Pereira",
    //   address: "Av Las Americas No. 46 - 03, Pereira",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Sincelejo",
    //   address: "Cl 28 No. 25B - 27, C.C. Guacari, Lc 101, Sincelejo",
    //   horario: "L–D 8:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Túquerres",
    //   address: "Cr 13 No. 20, Esquina, Túquerres",
    //   horario: "L–D 10:00–20:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Venecia",
    //   address: "Av 45C sur No. 51 - 90, Bogotá",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Villavicencio",
    //   address: "Cl 31 No. 31 - 95, Villavicencio",
    //   horario: "L–V 8:00–21:00 · S/D/F 7:00–21:00",
    //   telefono: "(601) 746 8001"
    // },
    // {
    //   name: "Alkosto Yopal",
    //   address: "Cl 24 No. 28 - 72, C.C. Morichal Plaza. Ancla No. 2, Yopal",
    //   horario: "L–D 8:00–21:00",
    //   telefono: "(601) 746 8001"
    // }
  ];
}
