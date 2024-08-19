function(properties, context) {

	const { faker } = require('@faker-js/faker');
    
    faker.setLocale(properties.language);
    
    try
    {
        const firstname = faker.name.firstName(properties.gender);
        const gender = faker.name.gender(properties.binary);
        const jobarea = faker.name.jobArea();
        const jobdescriptor = faker.name.jobDescriptor();
        const jobtitle = faker.name.jobTitle();
        const jobtype = faker.name.jobType();
        const lastname = faker.name.lastName(properties.gender);
        const middlename = faker.name.middleName(properties.gender);
        const prefix = faker.name.prefix(properties.gender);
        const suffix = faker.name.suffix(properties.gender);
        const title = faker.name.title();
        const fullname = faker.name.findName(firstname, lastname, properties.gender);
        
        const country = faker.address.country();
        const city = faker.address.cityName();
        const address = faker.address.streetAddress(true);
        const timezone = faker.address.timeZone();
        const zipcode = faker.address.zipCode();
        const avatar = faker.image.people();
        const website = faker.internet.faker.internet.domainName();
        const email = faker.internet.email(firstname, lastname)
        const ip = faker.internet.ip()
        const password = faker.internet.password()
        const username = faker.internet.userName(firstname, lastname)

        return { fullname, firstname, gender, jobarea, jobdescriptor, jobtitle, jobtype, lastname, middlename, prefix, suffix, title, country, city, address, timezone, zipcode, avatar, website, email, ip, password, username }
    
    }catch(err){
        let error = JSON.stringify(err);

        return {
            error: error
        };    
    }
        

}