import 'jest';
import {f, validate, ValidationError, validatedPlainToClass, plainToClass} from '@marcj/marshal';

class Page {
    @f
    name: string;

    @f
    age: number;
}

test(() => {
	const errors = validate(Page, {name: 'peter'});
	expect(errors.length).toBe(1);
	expect(errors[0]).toBeInstanceOf(ValidationError);
	expect(errors[0].path).toBe('age');
	expect(errors[0].message).toBe('Required value is undefined');
	if (errors.length === 0) {
	    const page = plainToClass(Page, {name: 'peter'});
	}

	//or do both at the same time and throw error if validations fails
	const page = validatedPlainToClass(Page, {name: 'peter'});
})