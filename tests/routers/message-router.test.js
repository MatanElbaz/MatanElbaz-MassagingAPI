const supertest = require('supertest');
const { expect } = require('chai');
const { app } = require('../../index');
const Db = require('../../services/DB.json');

describe('Messages Controller', () => {
    describe('POST /send', function () {
        it('Should create a new message and add it to the Db', async function () {
            let lastLength = 0;

            const newMessageDetails = {
                recipient: 'Yoav',
                sender: 'Tal',
                message: 'new message',
            }

            if (Db[newMessageDetails.recipient] != undefined) {
                lastLength = Db[newMessageDetails.recipient].length;
            }

            const response = await supertest(app).post('/send').send(newMessageDetails).expect(200);
            expect(response.body).to.exist
            expect(response.body[lastLength].target).to.eq(newMessageDetails.recipient)
            expect(response.body[lastLength].source).to.eq(newMessageDetails.sender)
            expect(response.body[lastLength].context).to.eq(newMessageDetails.message)
            expect(Db['Yoav'].length).to.greaterThan(lastLength)
        })
    })
    describe('POST /recive', function () {
        context('When recipient is given', () => {
            it('Should recive the messages of the given recipient', async function () {
                const newRecipient = {
                    recipient: 'Matan',
                    sender: 'Tal',
                    message: 'new message',
                }
                 await supertest(app).post('/send').send(newRecipient).expect(200);

                const response = await supertest(app).post('/recive').send(newRecipient).expect(200);
                expect(response.body[0]).to.exist
                expect(response.body[0].target).to.eq(newRecipient.recipient)
                expect(response.body[0].source).to.eq(newRecipient.sender)
                expect(response.body[0].context).to.eq(newRecipient.message)
            })
        })
        context('when recipient is not exist', () => {
            it('Should return status code 404', async function () {
                await supertest(app).post('/').send({}).expect(404)
            })
        })
    })
})