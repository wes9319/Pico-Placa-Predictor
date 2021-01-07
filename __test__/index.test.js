import {Predictor} from '../index.js' ;

jest.mock('../index.js');

beforeEach(() => {
    Predictor.mockClear();
  });

describe('Pico & placa Predictor Testing', ()=>{
    test('Check if the class constructor is been called', () => {
        const canIDrive = new Predictor('PCF-1728', 'November 11,2020', '12:00');
        expect(Predictor).toHaveBeenCalledTimes(1);
    });

    test('Check if predict method is been called', () => {
        expect(Predictor).not.toHaveBeenCalled();
      
        const canIDrive = new Predictor('PCF-1728', 'November 11,2020', '12:00');
        expect(Predictor).toHaveBeenCalledTimes(1);
        canIDrive.predict();
        
        const mockPredictor = Predictor.mock.instances[0];
        const mockPredict = mockPredictor.predict;

        expect(mockPredict).toHaveBeenCalledTimes(1);
      });
});