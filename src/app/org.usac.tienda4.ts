import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.usac.tienda4{
   export abstract class Persona extends Participant {
      id: string;
      nombres: string;
      apellidos: string;
   }
   export enum Color {
      Azul,
      Gris,
      Verde,
      Negro,
      Blanco,
   }
   export enum Oferta {
      Si,
      No,
   }
   export enum Tipo {
      Electrodomestico,
      Electronico,
      Linea_Blanca,
   }
   export class Usuario extends Persona {
      saldo: number;
   }
   export class Sucursal extends Participant {
      id: string;
      nombre: string;
      ganancias: number;
   }
   export class Producto extends Asset {
      id: string;
      nombre: string;
      precio: number;
      cantidad: number;
      sucursal: Sucursal;
      color: Color;
      tipo: Tipo;
      oferta: Oferta;
      porcentaje: number;
   }
   export class Pago extends Transaction {
      producto: Producto;
      usuario: Usuario;
      cantidadP: number;
   }
   export class Recargar extends Transaction {
      usuario: Usuario;
      dinero: number;
   }
   export class Rebastecer extends Transaction {
      producto: Producto;
      cantidad: number;
   }
// }
