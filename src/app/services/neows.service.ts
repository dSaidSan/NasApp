import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeowsService {

  constructor(private http: HttpClient) { }

  getData() {
    const today: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    const url: string = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + today + '&end_date=' + today + '&api_key=DEMO_KEY';

    return this.http.get(url);
    // return Observable.create((observer: any) => {
    //   observer.next(this.dataEnDuro())
    // })


  }

  dataEnDuro() {
    return {
      "links": {
        "next": "http://www.neowsapp.com/rest/v1/feed?start_date=2022-07-03&end_date=2022-07-03&detailed=false&api_key=DEMO_KEY",
        "prev": "http://www.neowsapp.com/rest/v1/feed?start_date=2022-07-01&end_date=2022-07-01&detailed=false&api_key=DEMO_KEY",
        "self": "http://www.neowsapp.com/rest/v1/feed?start_date=2022-07-02&end_date=2022-07-02&detailed=false&api_key=DEMO_KEY"
      },
      "element_count": 9,
      "near_earth_objects": {
        "2022-07-02": [
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/2010302?api_key=DEMO_KEY"
            },
            "id": "2010302",
            "neo_reference_id": "2010302",
            "name": "10302 (1989 ML)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2010302",
            "absolute_magnitude_h": 19.53,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.3300311834,
                "estimated_diameter_max": 0.7379721607
              },
              "meters": {
                "estimated_diameter_min": 330.0311833581,
                "estimated_diameter_max": 737.9721606833
              },
              "miles": {
                "estimated_diameter_min": 0.2050718064,
                "estimated_diameter_max": 0.4585544995
              },
              "feet": {
                "estimated_diameter_min": 1082.7795076085,
                "estimated_diameter_max": 2421.1685836563
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 10:21",
                "epoch_date_close_approach": 1656757260000,
                "relative_velocity": {
                  "kilometers_per_second": "2.5867198267",
                  "kilometers_per_hour": "9312.1913759711",
                  "miles_per_hour": "5786.2335802527"
                },
                "miss_distance": {
                  "astronomical": "0.0994563206",
                  "lunar": "38.6885087134",
                  "kilometers": "14878453.719797122",
                  "miles": "9245042.4431674036"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/2066400?api_key=DEMO_KEY"
            },
            "id": "2066400",
            "neo_reference_id": "2066400",
            "name": "66400 (1999 LT7)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2066400",
            "absolute_magnitude_h": 19.29,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.3685996993,
                "estimated_diameter_max": 0.8242139842
              },
              "meters": {
                "estimated_diameter_min": 368.5996993141,
                "estimated_diameter_max": 824.2139841524
              },
              "miles": {
                "estimated_diameter_min": 0.2290371638,
                "estimated_diameter_max": 0.5121426675
              },
              "feet": {
                "estimated_diameter_min": 1209.3166374978,
                "estimated_diameter_max": 2704.1142077666
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 00:00",
                "epoch_date_close_approach": 1656720000000,
                "relative_velocity": {
                  "kilometers_per_second": "18.0811302535",
                  "kilometers_per_hour": "65092.0689126774",
                  "miles_per_hour": "40445.6802641022"
                },
                "miss_distance": {
                  "astronomical": "0.0787961257",
                  "lunar": "30.6516928973",
                  "kilometers": "11787732.568972259",
                  "miles": "7324557.3741208142"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/2152671?api_key=DEMO_KEY"
            },
            "id": "2152671",
            "neo_reference_id": "2152671",
            "name": "152671 (1998 HL3)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2152671",
            "absolute_magnitude_h": 20.23,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.2390864572,
                "estimated_diameter_max": 0.5346135707
              },
              "meters": {
                "estimated_diameter_min": 239.0864571707,
                "estimated_diameter_max": 534.6135707332
              },
              "miles": {
                "estimated_diameter_min": 0.148561391,
                "estimated_diameter_max": 0.3321933691
              },
              "feet": {
                "estimated_diameter_min": 784.4044121439,
                "estimated_diameter_max": 1753.9815874044
              }
            },
            "is_potentially_hazardous_asteroid": true,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 10:28",
                "epoch_date_close_approach": 1656757680000,
                "relative_velocity": {
                  "kilometers_per_second": "6.9905597226",
                  "kilometers_per_hour": "25166.0150012557",
                  "miles_per_hour": "15637.1830434191"
                },
                "miss_distance": {
                  "astronomical": "0.1845656623",
                  "lunar": "71.7960426347",
                  "kilometers": "27610629.955219301",
                  "miles": "17156449.8990203138"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/3117468?api_key=DEMO_KEY"
            },
            "id": "3117468",
            "neo_reference_id": "3117468",
            "name": "(2002 FT6)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3117468",
            "absolute_magnitude_h": 22.6,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.0802703167,
                "estimated_diameter_max": 0.1794898848
              },
              "meters": {
                "estimated_diameter_min": 80.2703167283,
                "estimated_diameter_max": 179.4898847799
              },
              "miles": {
                "estimated_diameter_min": 0.049877647,
                "estimated_diameter_max": 0.1115298092
              },
              "feet": {
                "estimated_diameter_min": 263.3540659348,
                "estimated_diameter_max": 588.8775935812
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 11:17",
                "epoch_date_close_approach": 1656760620000,
                "relative_velocity": {
                  "kilometers_per_second": "26.1381333606",
                  "kilometers_per_hour": "94097.2800982572",
                  "miles_per_hour": "58468.3905143865"
                },
                "miss_distance": {
                  "astronomical": "0.4296238374",
                  "lunar": "167.1236727486",
                  "kilometers": "64270810.976266338",
                  "miles": "39936030.0823299444"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/3418109?api_key=DEMO_KEY"
            },
            "id": "3418109",
            "neo_reference_id": "3418109",
            "name": "(2008 NO3)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3418109",
            "absolute_magnitude_h": 18.77,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.4683332331,
                "estimated_diameter_max": 1.0472249454
              },
              "meters": {
                "estimated_diameter_min": 468.3332331362,
                "estimated_diameter_max": 1047.2249454148
              },
              "miles": {
                "estimated_diameter_min": 0.2910086894,
                "estimated_diameter_max": 0.6507152116
              },
              "feet": {
                "estimated_diameter_min": 1536.5264046026,
                "estimated_diameter_max": 3435.7774899148
              }
            },
            "is_potentially_hazardous_asteroid": true,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 11:53",
                "epoch_date_close_approach": 1656762780000,
                "relative_velocity": {
                  "kilometers_per_second": "13.8238961566",
                  "kilometers_per_hour": "49766.0261638464",
                  "miles_per_hour": "30922.6733127522"
                },
                "miss_distance": {
                  "astronomical": "0.1888973533",
                  "lunar": "73.4810704337",
                  "kilometers": "28258641.702317471",
                  "miles": "17559105.7272682598"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/3746497?api_key=DEMO_KEY"
            },
            "id": "3746497",
            "neo_reference_id": "3746497",
            "name": "(2016 EU155)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3746497",
            "absolute_magnitude_h": 23.9,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.04411182,
                "estimated_diameter_max": 0.0986370281
              },
              "meters": {
                "estimated_diameter_min": 44.1118199997,
                "estimated_diameter_max": 98.6370281305
              },
              "miles": {
                "estimated_diameter_min": 0.0274098057,
                "estimated_diameter_max": 0.0612901888
              },
              "feet": {
                "estimated_diameter_min": 144.7238235278,
                "estimated_diameter_max": 323.6123073718
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 06:52",
                "epoch_date_close_approach": 1656744720000,
                "relative_velocity": {
                  "kilometers_per_second": "8.3935802241",
                  "kilometers_per_hour": "30216.8888065997",
                  "miles_per_hour": "18775.5996031897"
                },
                "miss_distance": {
                  "astronomical": "0.4195591914",
                  "lunar": "163.2085254546",
                  "kilometers": "62765161.372362318",
                  "miles": "39000462.8012952684"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/3768021?api_key=DEMO_KEY"
            },
            "id": "3768021",
            "neo_reference_id": "3768021",
            "name": "(2017 CP)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3768021",
            "absolute_magnitude_h": 27.2,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.0096506147,
                "estimated_diameter_max": 0.0215794305
              },
              "meters": {
                "estimated_diameter_min": 9.6506146958,
                "estimated_diameter_max": 21.5794304844
              },
              "miles": {
                "estimated_diameter_min": 0.0059966121,
                "estimated_diameter_max": 0.0134088323
              },
              "feet": {
                "estimated_diameter_min": 31.6621227185,
                "estimated_diameter_max": 70.7986587106
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 08:57",
                "epoch_date_close_approach": 1656752220000,
                "relative_velocity": {
                  "kilometers_per_second": "5.8966547511",
                  "kilometers_per_hour": "21227.9571038173",
                  "miles_per_hour": "13190.2270126469"
                },
                "miss_distance": {
                  "astronomical": "0.3098182917",
                  "lunar": "120.5193154713",
                  "kilometers": "46348156.525358679",
                  "miles": "28799409.0185166102"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/54246378?api_key=DEMO_KEY"
            },
            "id": "54246378",
            "neo_reference_id": "54246378",
            "name": "(2022 CT4)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54246378",
            "absolute_magnitude_h": 23.79,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.0464039528,
                "estimated_diameter_max": 0.1037623929
              },
              "meters": {
                "estimated_diameter_min": 46.4039528246,
                "estimated_diameter_max": 103.7623929406
              },
              "miles": {
                "estimated_diameter_min": 0.0288340706,
                "estimated_diameter_max": 0.0644749419
              },
              "feet": {
                "estimated_diameter_min": 152.2439445851,
                "estimated_diameter_max": 340.4278092551
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 16:45",
                "epoch_date_close_approach": 1656780300000,
                "relative_velocity": {
                  "kilometers_per_second": "5.2100501591",
                  "kilometers_per_hour": "18756.1805726248",
                  "miles_per_hour": "11654.3612008068"
                },
                "miss_distance": {
                  "astronomical": "0.2301507877",
                  "lunar": "89.5286564153",
                  "kilometers": "34430067.618742199",
                  "miles": "21393851.9721883862"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          },
          {
            "links": {
              "self": "http://www.neowsapp.com/rest/v1/neo/2612343?api_key=DEMO_KEY"
            },
            "id": "2612343",
            "neo_reference_id": "2612343",
            "name": "612343 (2002 FT6)",
            "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2612343",
            "absolute_magnitude_h": 22.66,
            "estimated_diameter": {
              "kilometers": {
                "estimated_diameter_min": 0.0780827277,
                "estimated_diameter_max": 0.1745982871
              },
              "meters": {
                "estimated_diameter_min": 78.0827277491,
                "estimated_diameter_max": 174.5982871157
              },
              "miles": {
                "estimated_diameter_min": 0.0485183426,
                "estimated_diameter_max": 0.1084903123
              },
              "feet": {
                "estimated_diameter_min": 256.1769365085,
                "estimated_diameter_max": 572.8290443006
              }
            },
            "is_potentially_hazardous_asteroid": false,
            "close_approach_data": [
              {
                "close_approach_date": "2022-07-02",
                "close_approach_date_full": "2022-Jul-02 11:17",
                "epoch_date_close_approach": 1656760620000,
                "relative_velocity": {
                  "kilometers_per_second": "26.1381332267",
                  "kilometers_per_hour": "94097.2796161535",
                  "miles_per_hour": "58468.390214826"
                },
                "miss_distance": {
                  "astronomical": "0.4296238359",
                  "lunar": "167.1236721651",
                  "kilometers": "64270810.751869533",
                  "miles": "39936029.9428962354"
                },
                "orbiting_body": "Earth"
              }
            ],
            "is_sentry_object": false
          }
        ]
      }
    }
  }
}
