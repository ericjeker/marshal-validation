import {f, validate, ValidationError} from '@marcj/marshal';

class Page {
    @f
    name: string;

    @f
    age: number;
}

describe('Page', () => {

  it('should fail', () => {

  	const errors = validate(Page, {name: 'peter'});
	expect(errors.length).toBe(1);
	expect(errors[0]).toBeInstanceOf(ValidationError);
	expect(errors[0].path).toBe('age');
	expect(errors[0].message).toBe('Required value is undefined or null');

  });

  it('should not fail', () => {

  	const errors = validate(Page, {name: 'gabriel', age: 42});
	expect(errors.length).toBe(0);

  });

});