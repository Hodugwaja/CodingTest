import 'dart:io';
import 'dart:math';

void main()
{
  int i;
  var number = int.parse(stdin.readLineSync());
  
  if(number == 1){
		print('True');
		return;
	}
  for(i = 2; i<=sqrt(number); i++){
    if(number % i == 0){
      print('False');
      return;
    }
  }
  print('True');
  return;
}