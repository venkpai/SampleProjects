USE [CustomerDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](500) NULL,
	[Phone] [varchar](15) NULL,
	[Email] [varchar](25) NULL,
	[CompanyName] [varchar](500) NULL
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
-------------------------------------------------------------------------------------------------------------------------------------------

SELECT * FROM [CustomerDB].[dbo].[Customer]

SELECT Id, Name, Phone, Email, CompanyName FROM [CustomerDB].[dbo].[Customer]
-------------------------------------------------------------------------------------------------------------------------------------------

 INSERT INTO [dbo].[Customer] VALUES ('John Wright', '200-300-4444', 'johnw@microsoft.com', 'Microsoft')
 -------------------------------------------------------------------------------------------------------------------------------------------

 update dbo.Customer set 
                     Name = 'Tom Blake'
                    ,Phone = '111-222-3333'
                    ,Email = 'tomc@adobe.com'
                    ,CompanyName = 'Adobe'
                     where Id = '3' 
-------------------------------------------------------------------------------------------------------------------------------------------

