
import Decimal from 'decimal.js';
import { Preferment } from './Preferment';

export interface DoughFormula {
    baseFlourWeight: Decimal;
    baseWaterWeight: Decimal;
    preferments: Preferment[];
}
