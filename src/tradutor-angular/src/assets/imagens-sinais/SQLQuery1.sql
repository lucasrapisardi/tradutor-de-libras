create database Tradutor;

use Tradutor;

Create table libras(
LETRA CHAR(1) NOT NULL PRIMARY KEY,
SINAL varbinary(max) not null
);

insert into libras (LETRA,SINAL)
Select 'A', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\A.png', Single_Blob) as Image

insert into libras (LETRA,SINAL)
Select 'B', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\B.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'C', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\C.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'D', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\D.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'E', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\E.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'F', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\F.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'G', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\G.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'H', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\H.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'I', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\I.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'J', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\J.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'K', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\K.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'L', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\L.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'M', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\M.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'N', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\N.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'O', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\O.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'P', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\P.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'Q', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\Q.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'R', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\R.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'S', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\S.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'T', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\T.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'U', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\U.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'V', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\V.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'X', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\X.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'Y', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\Y.png', Single_Blob) as Image;

insert into libras (LETRA,SINAL)
Select 'Z', BulkColumn 
from Openrowset (Bulk 'C:\Users\nicki\Desktop\Faculdade\tcc\Z.png', Single_Blob) as Image;

select * from libras where LETRA ='A'