import { Injectable } from '@angular/core';

/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  test:any[];

  constructor() { 
    this.test  = new Array();
    this.test = [
      {
        "bookingId": "42638",
        "cliente": "Taylor C. Chavez",
        "fecha": "2018-03-30T20:25:41-07:00",
        "direccion": "5340 Magna. St.",
        "precio": 1
      },
      {
        "bookingId": "54608",
        "cliente": "Whilemina Burns",
        "fecha": "2018-04-25T16:39:37-07:00",
        "direccion": "Ap #446-2466 Lacus, Street",
        "precio": 2
      },
      {
        "bookingId": "42793",
        "cliente": "Micah V. Lowe",
        "fecha": "2019-07-21T06:51:23-07:00",
        "direccion": "328-7520 Sit St.",
        "precio": 3
      },
      {
        "bookingId": "67355",
        "cliente": "September Peters",
        "fecha": "2018-06-29T07:16:07-07:00",
        "direccion": "P.O. Box 239, 9728 At St.",
        "precio": 4
      },
      {
        "bookingId": "23414",
        "cliente": "Dorothy Hoffman",
        "fecha": "2017-12-30T22:08:21-08:00",
        "direccion": "842-5031 Nonummy St.",
        "precio": 5
      },
      {
        "bookingId": "01825",
        "cliente": "Shellie Vazquez",
        "fecha": "2018-05-14T17:33:36-07:00",
        "direccion": "769-3241 Urna. Ave",
        "precio": 6
      },
      {
        "bookingId": "79938",
        "cliente": "Hanna Ruiz",
        "fecha": "2018-03-16T15:50:54-07:00",
        "direccion": "4525 Amet Avenue",
        "precio": 7
      },
      {
        "bookingId": "85664",
        "cliente": "Uriel H. Howell",
        "fecha": "2019-02-13T02:16:39-08:00",
        "direccion": "Ap #968-1046 Metus. Street",
        "precio": 8
      },
      {
        "bookingId": "94101",
        "cliente": "Vera L. Harrison",
        "fecha": "2017-09-13T23:33:43-07:00",
        "direccion": "8087 Quis, Avenue",
        "precio": 9
      },
      {
        "bookingId": "10232",
        "cliente": "Orson Beach",
        "fecha": "2018-03-16T21:32:46-07:00",
        "direccion": "P.O. Box 667, 8976 Ullamcorper, Avenue",
        "precio": 10
      },
      {
        "bookingId": "46069",
        "cliente": "Gisela C. Woodward",
        "fecha": "2018-05-19T22:34:09-07:00",
        "direccion": "1291 Lorem Road",
        "precio": 11
      },
      {
        "bookingId": "81724",
        "cliente": "Abdul Workman",
        "fecha": "2017-09-15T11:28:45-07:00",
        "direccion": "9582 Facilisis St.",
        "precio": 12
      },
      {
        "bookingId": "08067",
        "cliente": "Herrod Mack",
        "fecha": "2017-12-09T13:17:33-08:00",
        "direccion": "Ap #647-1922 Ornare, Av.",
        "precio": 13
      },
      {
        "bookingId": "16895",
        "cliente": "Forrest Buckner",
        "fecha": "2018-11-14T14:49:34-08:00",
        "direccion": "9571 Est Av.",
        "precio": 14
      },
      {
        "bookingId": "71553",
        "cliente": "Quin Fitzgerald",
        "fecha": "2019-03-12T19:17:00-07:00",
        "direccion": "294-8094 Egestas St.",
        "precio": 15
      },
      {
        "bookingId": "95855",
        "cliente": "Nerea O. Lamb",
        "fecha": "2017-09-08T13:06:23-07:00",
        "direccion": "P.O. Box 109, 514 Sed Avenue",
        "precio": 16
      },
      {
        "bookingId": "32410",
        "cliente": "Brenna Duran",
        "fecha": "2017-10-26T00:57:01-07:00",
        "direccion": "P.O. Box 289, 9736 Parturient Avenue",
        "precio": 17
      },
      {
        "bookingId": "96638",
        "cliente": "Leonard Ballard",
        "fecha": "2019-05-15T02:52:06-07:00",
        "direccion": "207-3916 Duis Street",
        "precio": 18
      },
      {
        "bookingId": "76736",
        "cliente": "Caleb Y. Keith",
        "fecha": "2019-04-19T00:08:04-07:00",
        "direccion": "2613 Nullam Rd.",
        "precio": 19
      },
      {
        "bookingId": "12650",
        "cliente": "Raymond V. Lawson",
        "fecha": "2019-01-29T04:05:34-08:00",
        "direccion": "525-4775 Nascetur Ave",
        "precio": 20
      },
      {
        "bookingId": "25966",
        "cliente": "Shad S. Lott",
        "fecha": "2018-11-18T03:39:41-08:00",
        "direccion": "197-7982 Aenean Street",
        "precio": 21
      },
      {
        "bookingId": "85613",
        "cliente": "Reuben N. Hahn",
        "fecha": "2018-06-04T13:59:32-07:00",
        "direccion": "3314 Proin Rd.",
        "precio": 22
      },
      {
        "bookingId": "09300",
        "cliente": "Jessica X. Wilkerson",
        "fecha": "2018-04-06T17:53:30-07:00",
        "direccion": "4362 Libero St.",
        "precio": 23
      },
      {
        "bookingId": "27716",
        "cliente": "Demetria Z. Ellis",
        "fecha": "2018-12-30T16:30:35-08:00",
        "direccion": "916-8826 Lorem, Rd.",
        "precio": 24
      },
      {
        "bookingId": "96663",
        "cliente": "Fitzgerald Snider",
        "fecha": "2017-11-24T08:14:27-08:00",
        "direccion": "8473 Vitae, St.",
        "precio": 25
      },
      {
        "bookingId": "71395",
        "cliente": "Faith U. Knapp",
        "fecha": "2019-02-02T12:40:46-08:00",
        "direccion": "Ap #883-1522 Et Road",
        "precio": 26
      },
      {
        "bookingId": "09389",
        "cliente": "Ruth H. Lucas",
        "fecha": "2018-11-24T03:15:44-08:00",
        "direccion": "6767 Curabitur Avenue",
        "precio": 27
      },
      {
        "bookingId": "53783",
        "cliente": "Ingrid Lane",
        "fecha": "2018-09-05T09:57:18-07:00",
        "direccion": "7741 Est, Avenue",
        "precio": 28
      },
      {
        "bookingId": "11652",
        "cliente": "Clementine West",
        "fecha": "2019-05-03T03:40:50-07:00",
        "direccion": "432-6037 Mauris. St.",
        "precio": 29
      },
      {
        "bookingId": "15212",
        "cliente": "Otto Landry",
        "fecha": "2019-04-17T17:44:16-07:00",
        "direccion": "4901 Praesent Ave",
        "precio": 30
      },
      {
        "bookingId": "78340",
        "cliente": "Ramona T. Cervantes",
        "fecha": "2019-07-25T00:09:56-07:00",
        "direccion": "177-3614 Lobortis Rd.",
        "precio": 31
      },
      {
        "bookingId": "69668",
        "cliente": "Flynn G. Phelps",
        "fecha": "2018-11-05T10:30:04-08:00",
        "direccion": "2309 Aenean Avenue",
        "precio": 32
      },
      {
        "bookingId": "63022",
        "cliente": "Winter Morris",
        "fecha": "2018-04-07T08:50:11-07:00",
        "direccion": "6119 Suspendisse Rd.",
        "precio": 33
      },
      {
        "bookingId": "71832",
        "cliente": "Aphrodite G. Powell",
        "fecha": "2019-07-28T06:08:26-07:00",
        "direccion": "Ap #952-9843 Eu Road",
        "precio": 34
      },
      {
        "bookingId": "58585",
        "cliente": "Magee K. Fry",
        "fecha": "2018-02-09T04:08:58-08:00",
        "direccion": "Ap #315-7532 Iaculis Street",
        "precio": 35
      },
      {
        "bookingId": "66673",
        "cliente": "David Tucker",
        "fecha": "2018-10-25T15:54:59-07:00",
        "direccion": "498-9662 A, Road",
        "precio": 36
      },
      {
        "bookingId": "11756",
        "cliente": "Ora Curry",
        "fecha": "2018-06-09T04:37:53-07:00",
        "direccion": "P.O. Box 179, 183 Enim St.",
        "precio": 37
      },
      {
        "bookingId": "25952",
        "cliente": "Darrel Fuller",
        "fecha": "2018-01-17T08:00:53-08:00",
        "direccion": "Ap #881-8905 Arcu. Street",
        "precio": 38
      },
      {
        "bookingId": "83720",
        "cliente": "Jeremy U. Fuller",
        "fecha": "2017-11-04T18:23:01-07:00",
        "direccion": "Ap #942-1609 Adipiscing. Rd.",
        "precio": 39
      },
      {
        "bookingId": "72278",
        "cliente": "Garrett Mccall",
        "fecha": "2018-11-30T23:23:09-08:00",
        "direccion": "439-4754 Libero Av.",
        "precio": 40
      },
      {
        "bookingId": "98805",
        "cliente": "Andrew Reilly",
        "fecha": "2019-07-24T22:47:31-07:00",
        "direccion": "342-603 Consequat St.",
        "precio": 41
      },
      {
        "bookingId": "08790",
        "cliente": "Bertha Y. Knowles",
        "fecha": "2017-11-23T21:05:39-08:00",
        "direccion": "Ap #472-1151 Proin Av.",
        "precio": 42
      },
      {
        "bookingId": "18539",
        "cliente": "Ebony Macdonald",
        "fecha": "2018-07-05T10:36:09-07:00",
        "direccion": "852-2907 Consectetuer Avenue",
        "precio": 43
      },
      {
        "bookingId": "24547",
        "cliente": "Xantha Z. Morse",
        "fecha": "2017-11-23T04:59:13-08:00",
        "direccion": "4411 Non, Road",
        "precio": 44
      },
      {
        "bookingId": "86715",
        "cliente": "George M. Dillon",
        "fecha": "2018-07-28T11:06:21-07:00",
        "direccion": "8648 At Road",
        "precio": 45
      },
      {
        "bookingId": "59658",
        "cliente": "Alfonso Gilliam",
        "fecha": "2018-09-03T05:57:10-07:00",
        "direccion": "324-4866 Sed Street",
        "precio": 46
      },
      {
        "bookingId": "92066",
        "cliente": "Mikayla Ramsey",
        "fecha": "2018-08-25T23:58:21-07:00",
        "direccion": "136-9653 Auctor Ave",
        "precio": 47
      },
      {
        "bookingId": "52593",
        "cliente": "Harrison Silva",
        "fecha": "2017-10-08T21:33:28-07:00",
        "direccion": "P.O. Box 452, 6879 Duis Rd.",
        "precio": 48
      },
      {
        "bookingId": "68343",
        "cliente": "Zahir Washington",
        "fecha": "2019-02-23T19:15:40-08:00",
        "direccion": "6934 Quisque Rd.",
        "precio": 49
      },
      {
        "bookingId": "00819",
        "cliente": "Kasimir C. Talley",
        "fecha": "2017-11-13T18:33:53-08:00",
        "direccion": "8916 Arcu. Avenue",
        "precio": 50
      },
      {
        "bookingId": "02685",
        "cliente": "Hakeem Mcmillan",
        "fecha": "2018-04-07T08:52:23-07:00",
        "direccion": "449-5181 Vulputate, Av.",
        "precio": 51
      },
      {
        "bookingId": "14942",
        "cliente": "Nathan U. Hughes",
        "fecha": "2018-09-14T18:15:34-07:00",
        "direccion": "545-7691 Luctus Rd.",
        "precio": 52
      },
      {
        "bookingId": "47683",
        "cliente": "Coby G. Weber",
        "fecha": "2019-08-08T10:15:05-07:00",
        "direccion": "P.O. Box 557, 5550 Aliquam Road",
        "precio": 53
      },
      {
        "bookingId": "31103",
        "cliente": "Kennan Cooke",
        "fecha": "2018-03-28T02:37:44-07:00",
        "direccion": "508-5993 Duis St.",
        "precio": 54
      },
      {
        "bookingId": "30262",
        "cliente": "Cameron Allison",
        "fecha": "2017-10-21T14:02:02-07:00",
        "direccion": "Ap #372-3597 Pellentesque Rd.",
        "precio": 55
      },
      {
        "bookingId": "22850",
        "cliente": "Xaviera L. Chandler",
        "fecha": "2017-12-03T19:47:34-08:00",
        "direccion": "P.O. Box 561, 890 Cum Road",
        "precio": 56
      },
      {
        "bookingId": "04086",
        "cliente": "Violet M. Keith",
        "fecha": "2018-07-06T09:42:16-07:00",
        "direccion": "P.O. Box 237, 5854 In Road",
        "precio": 57
      },
      {
        "bookingId": "23164",
        "cliente": "Sharon Cote",
        "fecha": "2018-12-19T17:15:31-08:00",
        "direccion": "6136 Orci. Ave",
        "precio": 58
      },
      {
        "bookingId": "70713",
        "cliente": "Astra D. Waller",
        "fecha": "2019-02-16T22:10:52-08:00",
        "direccion": "310-5941 Tellus. Road",
        "precio": 59
      },
      {
        "bookingId": "27336",
        "cliente": "Galvin Dale",
        "fecha": "2019-05-03T07:11:46-07:00",
        "direccion": "462-950 Eu Road",
        "precio": 60
      },
      {
        "bookingId": "76768",
        "cliente": "Carter T. Mcfarland",
        "fecha": "2017-10-31T15:49:32-07:00",
        "direccion": "P.O. Box 909, 2827 Tincidunt Ave",
        "precio": 61
      },
      {
        "bookingId": "89659",
        "cliente": "Steven Hendricks",
        "fecha": "2019-01-23T22:56:20-08:00",
        "direccion": "Ap #136-9203 Erat, Rd.",
        "precio": 62
      },
      {
        "bookingId": "37268",
        "cliente": "Neville H. Bean",
        "fecha": "2018-03-22T23:58:43-07:00",
        "direccion": "124-9750 Praesent Street",
        "precio": 63
      },
      {
        "bookingId": "22592",
        "cliente": "Hermione A. Sanford",
        "fecha": "2019-07-27T13:56:21-07:00",
        "direccion": "P.O. Box 443, 1816 Vivamus Av.",
        "precio": 64
      },
      {
        "bookingId": "07702",
        "cliente": "Gillian Roberson",
        "fecha": "2019-04-12T22:11:35-07:00",
        "direccion": "P.O. Box 937, 8964 Sit Street",
        "precio": 65
      },
      {
        "bookingId": "89419",
        "cliente": "Clio A. Warner",
        "fecha": "2019-05-20T06:06:41-07:00",
        "direccion": "2815 Sagittis Av.",
        "precio": 66
      },
      {
        "bookingId": "98947",
        "cliente": "Price E. Mcdowell",
        "fecha": "2018-01-29T20:18:44-08:00",
        "direccion": "409-5535 Sodales Street",
        "precio": 67
      },
      {
        "bookingId": "99517",
        "cliente": "Skyler L. Castaneda",
        "fecha": "2018-06-12T08:05:25-07:00",
        "direccion": "P.O. Box 130, 7703 Purus Avenue",
        "precio": 68
      },
      {
        "bookingId": "68872",
        "cliente": "Lunea Q. Olsen",
        "fecha": "2017-11-18T06:25:33-08:00",
        "direccion": "8352 Interdum. Avenue",
        "precio": 69
      },
      {
        "bookingId": "25619",
        "cliente": "Abraham K. Rios",
        "fecha": "2018-02-06T07:07:44-08:00",
        "direccion": "4949 Blandit St.",
        "precio": 70
      },
      {
        "bookingId": "48108",
        "cliente": "Gregory H. Myers",
        "fecha": "2018-01-13T09:24:02-08:00",
        "direccion": "Ap #427-5638 Euismod Ave",
        "precio": 71
      },
      {
        "bookingId": "50056",
        "cliente": "Jacob Hogan",
        "fecha": "2018-03-02T15:49:51-08:00",
        "direccion": "5844 Eget, Ave",
        "precio": 72
      },
      {
        "bookingId": "41313",
        "cliente": "Donna J. Newton",
        "fecha": "2019-07-08T21:30:12-07:00",
        "direccion": "427-4926 Suspendisse Rd.",
        "precio": 73
      },
      {
        "bookingId": "41548",
        "cliente": "Rafael S. Kelley",
        "fecha": "2017-10-24T22:43:45-07:00",
        "direccion": "6951 Iaculis St.",
        "precio": 74
      },
      {
        "bookingId": "08760",
        "cliente": "Paul N. Jarvis",
        "fecha": "2018-09-14T12:24:41-07:00",
        "direccion": "Ap #997-3457 Fermentum St.",
        "precio": 75
      },
      {
        "bookingId": "41948",
        "cliente": "Blaze Heath",
        "fecha": "2018-08-11T12:51:37-07:00",
        "direccion": "223-1168 Eu Street",
        "precio": 76
      },
      {
        "bookingId": "51753",
        "cliente": "Warren M. Dennis",
        "fecha": "2019-02-20T00:39:48-08:00",
        "direccion": "Ap #829-4307 Mollis. Av.",
        "precio": 77
      },
      {
        "bookingId": "32043",
        "cliente": "Macaulay Y. Pace",
        "fecha": "2019-05-08T08:14:01-07:00",
        "direccion": "358-1459 Vel Rd.",
        "precio": 78
      },
      {
        "bookingId": "87276",
        "cliente": "Gabriel Ayala",
        "fecha": "2019-02-26T16:48:15-08:00",
        "direccion": "Ap #815-7773 Amet St.",
        "precio": 79
      },
      {
        "bookingId": "37353",
        "cliente": "Ray W. Mcknight",
        "fecha": "2018-08-11T01:12:16-07:00",
        "direccion": "200-5986 Egestas, Av.",
        "precio": 80
      },
      {
        "bookingId": "51358",
        "cliente": "Vaughan Zamora",
        "fecha": "2019-01-17T07:56:00-08:00",
        "direccion": "P.O. Box 475, 2607 Sagittis. Street",
        "precio": 81
      },
      {
        "bookingId": "24008",
        "cliente": "Alden W. Moran",
        "fecha": "2018-10-18T16:15:27-07:00",
        "direccion": "5432 Eleifend Avenue",
        "precio": 82
      },
      {
        "bookingId": "90735",
        "cliente": "Preston Gomez",
        "fecha": "2019-07-18T19:32:43-07:00",
        "direccion": "5071 Nostra, St.",
        "precio": 83
      },
      {
        "bookingId": "09118",
        "cliente": "Jescie Q. Collins",
        "fecha": "2018-02-06T20:20:30-08:00",
        "direccion": "Ap #533-2151 Parturient Road",
        "precio": 84
      },
      {
        "bookingId": "17404",
        "cliente": "Madonna L. Kim",
        "fecha": "2017-12-12T17:51:43-08:00",
        "direccion": "P.O. Box 361, 7912 Sit Avenue",
        "precio": 85
      },
      {
        "bookingId": "61658",
        "cliente": "May Holden",
        "fecha": "2018-08-26T11:02:08-07:00",
        "direccion": "Ap #728-1241 Laoreet Rd.",
        "precio": 86
      },
      {
        "bookingId": "29571",
        "cliente": "Christian Conway",
        "fecha": "2019-01-24T04:49:21-08:00",
        "direccion": "1534 Eget Avenue",
        "precio": 87
      },
      {
        "bookingId": "03360",
        "cliente": "Cody W. Watts",
        "fecha": "2018-02-17T22:00:50-08:00",
        "direccion": "702-7147 Enim. Avenue",
        "precio": 88
      },
      {
        "bookingId": "60240",
        "cliente": "Fleur Bass",
        "fecha": "2018-05-06T12:52:52-07:00",
        "direccion": "Ap #826-4871 Nulla Avenue",
        "precio": 89
      },
      {
        "bookingId": "40370",
        "cliente": "Palmer S. Sanchez",
        "fecha": "2019-06-26T08:08:29-07:00",
        "direccion": "Ap #231-7071 Donec Av.",
        "precio": 90
      },
      {
        "bookingId": "38495",
        "cliente": "Regan M. Levine",
        "fecha": "2017-11-25T15:58:18-08:00",
        "direccion": "292-863 Magna. St.",
        "precio": 91
      },
      {
        "bookingId": "89418",
        "cliente": "Hermione V. Kerr",
        "fecha": "2019-06-07T01:53:56-07:00",
        "direccion": "226-2544 Sit Ave",
        "precio": 92
      },
      {
        "bookingId": "39034",
        "cliente": "Carl B. Snyder",
        "fecha": "2018-12-23T21:27:00-08:00",
        "direccion": "Ap #567-946 Nullam Rd.",
        "precio": 93
      },
      {
        "bookingId": "36727",
        "cliente": "Upton Bishop",
        "fecha": "2018-01-01T05:33:54-08:00",
        "direccion": "302-2071 Volutpat St.",
        "precio": 94
      },
      {
        "bookingId": "96322",
        "cliente": "Xenos White",
        "fecha": "2017-12-30T07:32:51-08:00",
        "direccion": "549-4325 Taciti Rd.",
        "precio": 95
      },
      {
        "bookingId": "58020",
        "cliente": "Deanna S. Carroll",
        "fecha": "2018-08-25T05:50:32-07:00",
        "direccion": "1988 Cursus. Rd.",
        "precio": 96
      },
      {
        "bookingId": "94756",
        "cliente": "Nasim O. Santiago",
        "fecha": "2018-10-22T08:19:11-07:00",
        "direccion": "P.O. Box 190, 9757 Vehicula. St.",
        "precio": 97
      },
      {
        "bookingId": "77914",
        "cliente": "Donovan Koch",
        "fecha": "2018-01-18T01:32:40-08:00",
        "direccion": "Ap #999-6494 Ullamcorper Rd.",
        "precio": 98
      },
      {
        "bookingId": "67759",
        "cliente": "Ralph B. Lawson",
        "fecha": "2017-12-01T11:45:38-08:00",
        "direccion": "P.O. Box 487, 8440 Euismod Street",
        "precio": 99
      },
      {
        "bookingId": "15411",
        "cliente": "Callie D. Whitley",
        "fecha": "2019-07-27T16:47:04-07:00",
        "direccion": "7375 Morbi St.",
        "precio": 100
      }
    ];
  }

  setUser(obj: any) {
    localStorage.setItem('token', JSON.stringify(obj));
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('token'));
  }

  getDataTest():any{
    return this.test;
  }

}
