/**
 * 18:00 --> 1080
 * .split vai dividir a array em dois elementos string separados pelo :
 *  map vai percorrer a array gerada anteriormente e converter o valor para número
 * @param hourString 
 */


export function convertHourStringToMinutes(hourString: string){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes
  return minutesAmount

}