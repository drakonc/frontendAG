export class Function {

    getDate(): string {
        const fecha = new Date();
        const year = fecha.getFullYear(); // el año se puede quitar de este ejemplo
        let mes: any = fecha.getMonth() + 1; // pero ya que estamos lo ponemos completo
        let dia: any = fecha.getDate();
        let hora: any = fecha.getHours();
        let minuto: any = fecha.getMinutes();
        let segundo: any = fecha.getSeconds();

        if (mes < 10) { mes = '0' + mes; }
        if (dia < 10) { dia = '0' + dia; }
        if (hora < 10) { hora = '0' + hora; }
        if (minuto < 10) { minuto = '0' + minuto; }
        if (segundo < 10) { segundo = '0' + segundo; }
        const date = dia + '/' + mes + '/' + year + ' ' + hora + ':' + minuto + ':' + segundo;

        return date;
    }

}