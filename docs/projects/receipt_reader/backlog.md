---
title: Receipt Reader - Backlog
tags: [ML, Javascript]
date: 2019-04-11
---

# Receipt Reader

## What is it

An receipt reader trained with ML concepts. It will identify a receipt, and then split that receipt into zones.

The zones that we will focus on are:

* The Store name
* The total price
* The date
* The list of items purchased

Then we will get the data out of each zone.

If the ML fails to read the receipt, the user will be prompted to select the zones. The provided data will further enhance the ML model.

After the scanning has been completed, it will list all the information it has gathered. You can then check and approve the data, which will get saved in the database under your account.

The main focus is to make it a data collecting API that can be used by any other App.  
The user is in charge of it's own data and can permit other Apps to use his personal data.

If time allows, I will be making an app that reads and displays all of the data that has been collected.

## Pitching the idea

I have written a small pitch that I will present to my friends.

> A machine learning receipt scanner.
> It will identify zones in a receipt like Store name date and total price.
> Later it will be able to also detect individual items.
> This data will get collected in a database of the user.
>
> If the app fails to read the receipt, it will prompt the user to manually click the respective zones. Then it will use this data to further train the ML model.
>
> When all of this is successful, I will make an app that reads in and displays this data in graphs.

Friends feedback:

1) e
2) 'Oh that seems cool'
3) 'I don't understand a lot of what you just said haha'
4) e
5) e

## Collecting the structure

I first need a model that recognizes receipts. I can either train this myself or look if it has already been made and leverage that.

I actually have been saving and storing my receipts of the last 2 months as pictures. But the more data the better.

Then I need to be able to split the receipt into zones. Not sure how I would go about that yet.

Reading text from a zone shouldn't be too difficult.

To gain some confidence I want to fresh up my knowledge of tensorflow.js and ml5.js.

## Privacy issues

Now, Machine Learning goes hand in hand with Data collection. In order to improve our model we need endless amounts of data.  
In the past the data had to go to the cloud computer to get added to the model. But with the javascript adaptation of tensorflow, this can happen client-side.

So any user that does not wish to have his data exposed in any way, can choose to not send their data to the cloud and still benefit from a model that keeps getting trained.