import Segment from "./Segment";

 /**
 * Utilizando o padrão CHAIN OF RESPONSABILITY * 
 * 
 */
export default interface FareCalculator {
  next?: FareCalculator;
  calculate(segment: Segment): number;
}