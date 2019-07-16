export const schedule= {
  tour: {
    id: "b52068af-28e4-4e91-bdbb-037591b0ff84",
    alias: "pga",
    name: "PGA Tour"
  },
  season: {
    id: "42cb037c-a813-49b3-a64e-1355e7bf4038",
    year: 2019
  },
  tournaments: [
    {
      id: "4524eac8-9713-43c5-a742-290d8ab434ba",
      name: "The Open Championship",
      event_type: "stroke",
      purse: 10750000.0,
      winning_share: 1935000.0,
      currency: "USD",
      points: 600,
      start_date: "2019-07-18",
      sign_up_start: "2019-07-11",
      sign_up_end: "2019-07-17",
      end_date: "2019-07-21",
      course_timezone: "Europe/London",
      venue: {
        id: "4021bffa-e93d-4b7e-bef2-39172c09cd7a",
        name: "Royal Portrush Golf Club",
        city: "Portrush",
        country: "GBR",
        courses: [
          {
            id: "8b2c3c75-0956-465f-9237-2baee9d1365b",
            name: "Dunluce Links",
            yardage: 7337,
            par: 72,
            holes: [
              {
                number: 1,
                par: 4,
                yardage: 420,
                description: "Hughie's"
              },
              {
                number: 2,
                par: 5,
                yardage: 577,
                description: "Giant's Grave"
              },
              {
                number: 3,
                par: 3,
                yardage: 176,
                description: "Islay"
              },
              {
                number: 4,
                par: 4,
                yardage: 499,
                description: "Fred Daly's"
              },
              {
                number: 5,
                par: 4,
                yardage: 403,
                description: "White Rocks"
              },
              {
                number: 6,
                par: 3,
                yardage: 191,
                description: "Harry Colt's"
              },
              {
                number: 7,
                par: 5,
                yardage: 572,
                description: "Curran Point"
              },
              {
                number: 8,
                par: 4,
                yardage: 435,
                description: "Dunluce"
              },
              {
                number: 9,
                par: 4,
                yardage: 430,
                description: "P.G. Stevenson's"
              },
              {
                number: 10,
                par: 4,
                yardage: 448,
                description: "Himalayas"
              },
              {
                number: 11,
                par: 5,
                yardage: 473,
                description: "Tavern"
              },
              {
                number: 12,
                par: 5,
                yardage: 530,
                description: "Dhu Varren"
              },
              {
                number: 13,
                par: 3,
                yardage: 192,
                description: "Feather Bed"
              },
              {
                number: 14,
                par: 4,
                yardage: 464,
                description: "Causeway"
              },
              {
                number: 15,
                par: 4,
                yardage: 427,
                description: "Skerries"
              },
              {
                number: 16,
                par: 3,
                yardage: 230,
                description: "Calamity Corner"
              },
              {
                number: 17,
                par: 4,
                yardage: 405,
                description: "Purgatory"
              },
              {
                number: 18,
                par: 4,
                yardage: 465,
                description: "Babington's"
              }
            ]
          }
        ]
      }
    },
    // {
    //   id: "789bc1a2-a8a9-4b5c-be76-b3bf7ba7a650",
    //   name: "World Golf Championships-FedEx St. Jude Invitational",
    //   event_type: "stroke",
    //   purse: 10250000.0,
    //   winning_share: 1742500.0,
    //   currency: "USD",
    //   points: 550,
    //   start_date: "2019-07-25",
    //   end_date: "2019-07-28",
    //   sign_up_start: "2019-07-22",
    //   sign_up_end: "2019-07-24",
    //   course_timezone: "America/Chicago",
    //   venue: {
    //     id: "db8fa94a-f48d-4341-a8bf-7980b0a8d51d",
    //     name: "TPC Southwind",
    //     city: "Memphis",
    //     state: "TN",
    //     zipcode: "38115",
    //     country: "USA",
    //     courses: [
    //       {
    //         id: "1b8d7017-a5f5-4b8d-b658-5cd64fbd2e89",
    //         name: "TPC Southwind",
    //         yardage: 7244,
    //         par: 70,
    //         holes: [
    //           {
    //             number: 1,
    //             par: 4,
    //             yardage: 434
    //           },
    //           {
    //             number: 2,
    //             par: 4,
    //             yardage: 401
    //           },
    //           {
    //             number: 3,
    //             par: 5,
    //             yardage: 554
    //           },
    //           {
    //             number: 4,
    //             par: 3,
    //             yardage: 196
    //           },
    //           {
    //             number: 5,
    //             par: 4,
    //             yardage: 485
    //           },
    //           {
    //             number: 6,
    //             par: 4,
    //             yardage: 445
    //           },
    //           {
    //             number: 7,
    //             par: 4,
    //             yardage: 482
    //           },
    //           {
    //             number: 8,
    //             par: 3,
    //             yardage: 178
    //           },
    //           {
    //             number: 9,
    //             par: 4,
    //             yardage: 457
    //           },
    //           {
    //             number: 10,
    //             par: 4,
    //             yardage: 465
    //           },
    //           {
    //             number: 11,
    //             par: 3,
    //             yardage: 162
    //           },
    //           {
    //             number: 12,
    //             par: 4,
    //             yardage: 406
    //           },
    //           {
    //             number: 13,
    //             par: 4,
    //             yardage: 472
    //           },
    //           {
    //             number: 14,
    //             par: 3,
    //             yardage: 239
    //           },
    //           {
    //             number: 15,
    //             par: 4,
    //             yardage: 395
    //           },
    //           {
    //             number: 16,
    //             par: 5,
    //             yardage: 530
    //           },
    //           {
    //             number: 17,
    //             par: 4,
    //             yardage: 490
    //           },
    //           {
    //             number: 18,
    //             par: 4,
    //             yardage: 453
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "653944bf-08f1-4cfe-aa35-93776819ba75",
    //   name: "Wyndham Championship",
    //   event_type: "stroke",
    //   purse: 6200000.0,
    //   winning_share: 1116000.0,
    //   currency: "USD",
    //   points: 500,
    //   start_date: "2019-08-01",
    //   end_date: "2019-08-04",
    //   sign_up_start: "2019-07-29",
    //   sign_up_end: "2019-07-31",
    //   course_timezone: "America/New_York",
    //   venue: {
    //     id: "c7eeb574-ce09-4c61-8fa6-dd5f9685c3f0",
    //     name: "Sedgefield Country Club",
    //     city: "Greensboro",
    //     state: "NC",
    //     zipcode: "27407",
    //     country: "USA",
    //     courses: [
    //       {
    //         id: "e0e8218f-7815-485e-b176-6b731e285e34",
    //         name: "Sedgefield Country Club",
    //         yardage: 7117,
    //         par: 70,
    //         holes: [
    //           {
    //             number: 1,
    //             par: 4,
    //             yardage: 418
    //           },
    //           {
    //             number: 2,
    //             par: 4,
    //             yardage: 442
    //           },
    //           {
    //             number: 3,
    //             par: 3,
    //             yardage: 174
    //           },
    //           {
    //             number: 4,
    //             par: 4,
    //             yardage: 428
    //           },
    //           {
    //             number: 5,
    //             par: 5,
    //             yardage: 529
    //           },
    //           {
    //             number: 6,
    //             par: 4,
    //             yardage: 423
    //           },
    //           {
    //             number: 7,
    //             par: 3,
    //             yardage: 223
    //           },
    //           {
    //             number: 8,
    //             par: 4,
    //             yardage: 374
    //           },
    //           {
    //             number: 9,
    //             par: 4,
    //             yardage: 416
    //           },
    //           {
    //             number: 10,
    //             par: 4,
    //             yardage: 440
    //           },
    //           {
    //             number: 11,
    //             par: 4,
    //             yardage: 486
    //           },
    //           {
    //             number: 12,
    //             par: 3,
    //             yardage: 235
    //           },
    //           {
    //             number: 13,
    //             par: 4,
    //             yardage: 405
    //           },
    //           {
    //             number: 14,
    //             par: 4,
    //             yardage: 501
    //           },
    //           {
    //             number: 15,
    //             par: 5,
    //             yardage: 547
    //           },
    //           {
    //             number: 16,
    //             par: 3,
    //             yardage: 163
    //           },
    //           {
    //             number: 17,
    //             par: 4,
    //             yardage: 406
    //           },
    //           {
    //             number: 18,
    //             par: 4,
    //             yardage: 507
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "9c563422-bb1c-4c13-acf7-b0ecec483412",
    //   name: "THE NORTHERN TRUST",
    //   event_type: "stroke",
    //   purse: 9250000.0,
    //   winning_share: 1665000.0,
    //   currency: "USD",
    //   points: 2000,
    //   start_date: "2019-08-08",
    //   end_date: "2019-08-11",
    //   sign_up_start: "2019-08-05",
    //   sign_up_end: "2019-08-07",
    //   course_timezone: "America/New_York",
    //   venue: {
    //     id: "7dac8659-02d9-43ce-83a2-9b3b11b9736e",
    //     name: "Liberty National Golf Course",
    //     city: "Jersey City",
    //     state: "NJ",
    //     zipcode: "07305",
    //     country: "USA",
    //     courses: [
    //       {
    //         id: "a9aabe9f-4f83-4121-a3ba-c5cea9433280",
    //         name: "Liberty National",
    //         yardage: 7328,
    //         par: 71,
    //         holes: [
    //           {
    //             number: 1,
    //             par: 4,
    //             yardage: 427
    //           },
    //           {
    //             number: 2,
    //             par: 5,
    //             yardage: 538
    //           },
    //           {
    //             number: 3,
    //             par: 4,
    //             yardage: 467
    //           },
    //           {
    //             number: 4,
    //             par: 5,
    //             yardage: 611
    //           },
    //           {
    //             number: 5,
    //             par: 4,
    //             yardage: 474
    //           },
    //           {
    //             number: 6,
    //             par: 4,
    //             yardage: 496
    //           },
    //           {
    //             number: 7,
    //             par: 3,
    //             yardage: 225
    //           },
    //           {
    //             number: 8,
    //             par: 4,
    //             yardage: 431
    //           },
    //           {
    //             number: 9,
    //             par: 5,
    //             yardage: 563
    //           },
    //           {
    //             number: 10,
    //             par: 3,
    //             yardage: 150
    //           },
    //           {
    //             number: 11,
    //             par: 4,
    //             yardage: 481
    //           },
    //           {
    //             number: 12,
    //             par: 4,
    //             yardage: 325
    //           },
    //           {
    //             number: 13,
    //             par: 4,
    //             yardage: 445
    //           },
    //           {
    //             number: 14,
    //             par: 4,
    //             yardage: 490
    //           },
    //           {
    //             number: 15,
    //             par: 4,
    //             yardage: 398
    //           },
    //           {
    //             number: 16,
    //             par: 3,
    //             yardage: 219
    //           },
    //           {
    //             number: 17,
    //             par: 4,
    //             yardage: 395
    //           },
    //           {
    //             number: 18,
    //             par: 3,
    //             yardage: 193
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "e9387b4c-8f23-4763-9f83-106c4191b0dd",
    //   name: "BMW Championship",
    //   event_type: "stroke",
    //   purse: 9250000.0,
    //   winning_share: 1665000.0,
    //   currency: "USD",
    //   points: 2000,
    //   start_date: "2019-08-15",
    //   end_date: "2019-08-18",
    //   sign_up_start: "2019-08-12",
    //   sign_up_end: "2019-08-15",
    //   course_timezone: "America/Chicago",
    //   venue: {
    //     id: "a57fccb5-55ec-4380-8032-d9c561d760e6",
    //     name: "Medinah Country Club",
    //     city: "Medinah",
    //     state: "IL",
    //     zipcode: "60157",
    //     country: "USA",
    //     courses: [
    //       {
    //         id: "2e704a10-631e-46de-924b-80c2b9e565b1",
    //         name: "Course No. 3",
    //         yardage: 7657,
    //         par: 72,
    //         holes: [
    //           {
    //             number: 1,
    //             par: 4,
    //             yardage: 433
    //           },
    //           {
    //             number: 2,
    //             par: 3,
    //             yardage: 192
    //           },
    //           {
    //             number: 3,
    //             par: 4,
    //             yardage: 412
    //           },
    //           {
    //             number: 4,
    //             par: 4,
    //             yardage: 463
    //           },
    //           {
    //             number: 5,
    //             par: 5,
    //             yardage: 536
    //           },
    //           {
    //             number: 6,
    //             par: 4,
    //             yardage: 509
    //           },
    //           {
    //             number: 7,
    //             par: 5,
    //             yardage: 617
    //           },
    //           {
    //             number: 8,
    //             par: 3,
    //             yardage: 201
    //           },
    //           {
    //             number: 9,
    //             par: 4,
    //             yardage: 432
    //           },
    //           {
    //             number: 10,
    //             par: 5,
    //             yardage: 578
    //           },
    //           {
    //             number: 11,
    //             par: 4,
    //             yardage: 440
    //           },
    //           {
    //             number: 12,
    //             par: 4,
    //             yardage: 476
    //           },
    //           {
    //             number: 13,
    //             par: 3,
    //             yardage: 245
    //           },
    //           {
    //             number: 14,
    //             par: 5,
    //             yardage: 609
    //           },
    //           {
    //             number: 15,
    //             par: 4,
    //             yardage: 390
    //           },
    //           {
    //             number: 16,
    //             par: 4,
    //             yardage: 482
    //           },
    //           {
    //             number: 17,
    //             par: 3,
    //             yardage: 193
    //           },
    //           {
    //             number: 18,
    //             par: 4,
    //             yardage: 449
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // },
    // {
    //   id: "96887c44-e3c8-4aea-9a5c-fbc3c81644cb",
    //   name: "TOUR Championship",
    //   event_type: "stroke",
    //   currency: "USD",
    //   points: 2000,
    //   start_date: "2019-08-22",
    //   end_date: "2019-08-25",
    //   sign_up_start: "2019-08-19",
    //   sign_up_end: "2019-08-21",
    //   course_timezone: "America/New_York",
    //   venue: {
    //     id: "4ce41d81-8412-4696-afcf-f2397bc26c72",
    //     name: "East Lake GC",
    //     city: "Atlanta",
    //     state: "GA",
    //     zipcode: "30317",
    //     country: "USA",
    //     courses: [
    //       {
    //         id: "58016222-6d1e-4db9-b19f-1512500f624f",
    //         name: "East Lake GC",
    //         yardage: 7217,
    //         par: 70,
    //         holes: [
    //           {
    //             number: 1,
    //             par: 4,
    //             yardage: 424
    //           },
    //           {
    //             number: 2,
    //             par: 3,
    //             yardage: 214
    //           },
    //           {
    //             number: 3,
    //             par: 4,
    //             yardage: 387
    //           },
    //           {
    //             number: 4,
    //             par: 4,
    //             yardage: 440
    //           },
    //           {
    //             number: 5,
    //             par: 4,
    //             yardage: 520
    //           },
    //           {
    //             number: 6,
    //             par: 5,
    //             yardage: 525
    //           },
    //           {
    //             number: 7,
    //             par: 4,
    //             yardage: 394
    //           },
    //           {
    //             number: 8,
    //             par: 4,
    //             yardage: 405
    //           },
    //           {
    //             number: 9,
    //             par: 3,
    //             yardage: 235
    //           },
    //           {
    //             number: 10,
    //             par: 4,
    //             yardage: 469
    //           },
    //           {
    //             number: 11,
    //             par: 3,
    //             yardage: 197
    //           },
    //           {
    //             number: 12,
    //             par: 4,
    //             yardage: 391
    //           },
    //           {
    //             number: 13,
    //             par: 4,
    //             yardage: 439
    //           },
    //           {
    //             number: 14,
    //             par: 4,
    //             yardage: 442
    //           },
    //           {
    //             number: 15,
    //             par: 3,
    //             yardage: 211
    //           },
    //           {
    //             number: 16,
    //             par: 4,
    //             yardage: 481
    //           },
    //           {
    //             number: 17,
    //             par: 4,
    //             yardage: 453
    //           },
    //           {
    //             number: 18,
    //             par: 5,
    //             yardage: 590
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // }
  ]
};
