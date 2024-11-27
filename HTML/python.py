import requests
import json
import itertools

print('hello')

url = 'https://jsonplaceholder.typicode.com/todos'

response = requests.get(url)

response_dumps = response.json()
# print(response_dumps)
# # response_dumps.sort(key = lambda x:x['userId'])
group_json = itertools.groupby(response_dumps, key = lambda x:x['userId'])
# print(group_json)
for user_id, amount in group_json:
    print( f"user:{user_id} has {len(list(amount))} items")
    filter_data = len(list(filter(lambda x:x['completed']== True, list(amount))))
    print(f"user:{user_id} has {filter_data} items completed")



# 1. Read a JSON API and print the body (https://jsonplaceholder.typicode.com/todos)

# 2. Group items from the API by userId and show how many items each user has.
# 3. Group items from the API by userId and show how many COMPLETED items each user has.
# 4. Sort the information from point 3 from highest to lowest completed items.
# 5. Show the total of completed items for all the users.
# 6. Show the average COMPLETED items for the first 5 users.

